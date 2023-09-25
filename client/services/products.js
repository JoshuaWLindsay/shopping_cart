// Asynchronous API calls

import axios from "axios";
import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  GET_CART,
  DELETE_CHECKOUT,
  UPDATE_CART, 
} from "../constants/routes";

export const getProducts = async () => {
  const { data } = await axios.get(GET_PRODUCTS);
  return data;
}

export const createProduct = async (details) => {
  const { data } = await axios.post(CREATE_PRODUCT, { ...details });
  return data;
}

export const updateProduct = async (productId, details) => {
  const { data } = await axios.put(UPDATE_PRODUCT(productId), { ...details });
  return data;
}

export const deleteProduct = async (productId) => {
  const { data } = await axios.delete(DELETE_PRODUCT(productId));
  return data;
}

export const getCart = async () => {
  const { data } = await axios.get(GET_CART);
  return data;
}

export const checkoutCart = async () => {
  const { data } = await axios.post(DELETE_CHECKOUT);
  return data;
}

export const addToCart = async (productId) => {
  const { data } = await axios.post(UPDATE_CART, { productId });
  return data;
}