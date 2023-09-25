// API routes

export const GET_PRODUCTS = "/api/products";
export const CREATE_PRODUCT = "/api/products";
export const UPDATE_PRODUCT = (productId) => 
  `/api/products/${productId}`;
export const DELETE_PRODUCT = (productId) => 
  `/api/products/${productId}`;
export const GET_CART = "/api/cart";
export const DELETE_CHECKOUT = "/api/checkout";
export const UPDATE_CART = "/api/add-to-cart";