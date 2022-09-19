import axios from "axios";

const BASE_URL = "http://localhost:5000";

function postSignIn(config) {
  const promise = axios.post(`${BASE_URL}/signIn`, config);
  return promise;
}

function postSignUp(config) {
  const promise = axios.post(`${BASE_URL}/user`, config);
  return promise;
}

function getProducts(config) {
  const promise = axios.get(`${BASE_URL}/products`, config);
  return promise;
}

function getProductsInPromotion(config) {
  const promise = axios.get(`${BASE_URL}/products/category/Promocao`, config);
  return promise;
}

function getProductsById(config) {
  const promise = axios.get(`${BASE_URL}/product`, config);
  return promise;
}

function getCart(config) {
  const promise = axios.get(`${BASE_URL}/cart`, config);
  return promise;
}

function postCart(config) {
  const promise = axios.post(`${BASE_URL}/cart`, config);
  return promise;
}

function deleteCart(config) {
  const promise = axios.delete(`${BASE_URL}/cart`, config);
  return promise;
}

function getUser(config) {
  const promise = axios.get(`${BASE_URL}/user`, config);
  return promise;
}

function putUser(data, config) {
  const promise = axios.put(`${BASE_URL}/user`,data, config);
  return promise;
}

export {
  postSignIn,
  postSignUp,
  getProducts,
  getProductsInPromotion,
  getUser,
  putUser,
  deleteCart,
  getCart,
  postCart,
  getProductsById,
};
