import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function postSignIn (body) {
    const promise = axios.post(`${BASE_URL}/signIn`, body);
    return promise;
}

function getProducts (header) {
    const promise = axios.get(`${BASE_URL}/products`, header);
    return promise;
}

function getProductsInPromotion (header) {
    const promise = axios.get(`${BASE_URL}/products/category/:category`, header);
    return promise;
}

export { postSignIn, getProducts, getProductsInPromotion };