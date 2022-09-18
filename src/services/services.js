import axios from "axios";

const BASE_URL = "http://localhost:5000";

function postSignIn(body) {
  const promise = axios.post(`${BASE_URL}/signIn`, body);
  return promise;
}

function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/user`, body);
  return promise;
}

function getProducts(header) {
  const promise = axios.get(`${BASE_URL}/products`, header);
  return promise;
}

function getProductsInPromotion(config) {
  const promise = axios.get(`${BASE_URL}/products/category/Promocao`, config);
  return promise;
}

export { postSignIn, postSignUp, getProducts, getProductsInPromotion };
