import { defineEventHandler, setResponseHeaders } from 'h3';

export default defineEventHandler((event) => {
  // Only apply to /api/products routes
  if (event.path.startsWith('/api/products')) {
    setResponseHeaders(event, {
      'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Expose-Headers': '*',
    });
  }
});
