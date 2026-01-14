/* eslint-disable no-nested-ternary */
import { createError, defineEventHandler, getQuery } from 'h3';

import type { Product } from '.';
import products from './data/products.json';

export interface Option {
  label: string;
  value: string;
}

export interface GetProductOptionsQueryParams {
  category?: string;
  name?: string;
  inventoryStatus?: string;
}

export interface FilterOptions {
  [key: string]: Option[];
}

export interface FetchOptionResponse {
  message: string;
  data: FilterOptions;
}

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery<GetProductOptionsQueryParams>(event);

    // Build response based on requested options
    const data: FilterOptions = {};

    if (query.category === 'true') {
      // Extract unique categories from products
      const categories = [
        ...new Set(products.map((product: Product) => product.category)),
      ];
      data.category = categories.map((category) => ({
        label: category,
        value: category,
      }));
    }

    if (query.name === 'true') {
      // Extract unique product names from products
      const names = [
        ...new Set(products.map((product: Product) => product.name)),
      ];
      data.name = names.map((name) => ({
        label: name,
        value: name,
      }));
    }

    if (query.inventoryStatus === 'true') {
      // Extract unique inventory statuses from products
      const statuses = [
        ...new Set(products.map((product: Product) => product.inventoryStatus)),
      ];
      data.inventoryStatus = statuses.map((status) => ({
        label:
          status === 'INSTOCK'
            ? 'In Stock'
            : status === 'OUTOFSTOCK'
              ? 'Out of Stock'
              : status === 'LOWSTOCK'
                ? 'Low Stock'
                : status,
        value: status,
      }));
    }

    const response: FetchOptionResponse = {
      message: 'Success',
      data,
    };

    return new Promise((resolve) => {
      setTimeout(() => resolve(response), 500); // Simulate network delay
    });
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    });
  }
});
