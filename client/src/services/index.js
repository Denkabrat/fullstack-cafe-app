import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_PUBLIC_API_URL
});

const $authorizationHost = axios.create({
    baseURL: process.env.REACT_APP_PUBLIC_API_URL
});


const authorizationInterceptor = (config) => {

    config.headers.authorization = `Bearer ${localStorage.getItem('annaCafe')}`

    return config;
}

$authorizationHost.interceptors.request.use(authorizationInterceptor);


export {
    $host,
    $authorizationHost
}