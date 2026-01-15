import type { Data, FetchResponse } from '@fewangsit/wangsvue/datatable';
import { createError, defineEventHandler, getQuery } from 'h3';

import products from './data/products.json';

export interface Product extends Data {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  isOutOfStock?: boolean;
  rating: number;
  updatedAt: string;
  tags: Array<{
    text: string;
    severity:
      | 'success'
      | 'info'
      | 'danger'
      | 'warning'
      | 'secondary'
      | 'contrast';
  }>;
}

export interface GetProductsQueryParams {
  page?: string;
  limit?: string;
  sortOrder?: string;
  sortBy?: string;
  search?: string;

  category?: string; // Array string
  quantity?: string; // Array number
  name?: string; // Array string
  rating?: string; // Range number [min, max]
  inventoryStatus?: string; // Array string
}

const allProducts: Product[] = [...(products as Product[])];

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery<GetProductsQueryParams>(event);
    const page = parseInt(query.page as string) || 1;
    const limit = parseInt(query.limit as string) || Infinity;
    const sortBy = (query.sortBy as string) || undefined;
    const sortOrder = parseInt(query.sortOrder as string) || 1;

    const first = (page - 1) * limit;
    const last = page * limit;

    let filteredProducts = [...allProducts];

    // Apply filters
    if (query.category) {
      let categories: string[];
      try {
        // Handle stringified array format: '["Electronics","Accessories"]'
        categories = JSON.parse(query.category as string);
      } catch {
        // Fallback to comma-separated format: "Electronics,Accessories"
        categories = query.category.split(',').map((c) => c.trim());
      }
      filteredProducts = filteredProducts.filter((product) =>
        categories.includes(product.category),
      );
    }

    if (query.search) {
      const searchTerms = query.search.split(' ').filter((term) => term.trim());
      filteredProducts = filteredProducts.filter((product) =>
        searchTerms.every((term) => {
          const regex = new RegExp(term, 'i'); // Case-insensitive regex
          const productString = JSON.stringify(product);
          return regex.test(productString);
        }),
      );
    }

    if (query.quantity) {
      let quantities: number[];
      try {
        // Handle stringified array format: "[10,20,30]"
        quantities = JSON.parse(query.quantity as string);
      } catch {
        // Fallback to comma-separated format: "10,20,30"
        quantities = query.quantity.split(',').map((q) => parseInt(q.trim()));
      }

      // Handle as range: [min, max] or single value
      const [min = 0, max = Infinity] = quantities;
      filteredProducts = filteredProducts.filter(
        (product) => product.quantity >= min && product.quantity <= max,
      );
    }

    if (query.rating) {
      let ratings: number[];
      try {
        // Handle stringified array format: "[1,5]"
        ratings = JSON.parse(query.rating as string);
      } catch {
        // Fallback to comma-separated format: "1,5"
        ratings = query.rating.split(',').map((r) => parseInt(r.trim()));
      }

      // Handle as range: [min, max] with rating scale 0-5
      const [min = 0, max = 5] = ratings;
      filteredProducts = filteredProducts.filter(
        (product) => product.rating >= min && product.rating <= max,
      );

      console.log(ratings);
    }

    if (query.inventoryStatus) {
      let statuses: string[];
      try {
        // Handle stringified array format: '["INSTOCK","OUTOFSTOCK"]'
        statuses = JSON.parse(query.inventoryStatus as string);
      } catch {
        // Fallback to comma-separated format: "INSTOCK,OUTOFSTOCK"
        statuses = query.inventoryStatus.split(',').map((s) => s.trim());
      }
      filteredProducts = filteredProducts.filter((product) =>
        statuses.includes(product.inventoryStatus),
      );
    }

    // Apply sorting
    if (sortBy && sortOrder) {
      filteredProducts.sort((a, b) => {
        const valueA = a[sortBy as keyof Product];
        const valueB = b[sortBy as keyof Product];
        if (valueA < valueB) return sortOrder === 1 ? -1 : 1;
        if (valueA > valueB) return sortOrder === 1 ? 1 : -1;
        return 0;
      });
    }

    const paginatedProducts = filteredProducts
      .slice(first, last)
      .map((product) => ({
        ...product,
        isOutOfStock: product.quantity === 0,
        tags: product.tags || [],
      }));

    const response: FetchResponse<Product> = {
      message: 'Success',
      data: {
        data: paginatedProducts,
        totalRecords: filteredProducts.length,
      },
    };

    return new Promise((resolve) => {
      setTimeout(() => resolve(response), 2000);
    });
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    });
  }
});
