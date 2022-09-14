import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function postSignIn (body) {
    const promise = axios.post(`${BASE_URL}/signIn`, body);
    return promise;
}

export { postSignIn };