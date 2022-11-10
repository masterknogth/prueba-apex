import axios from 'axios';
import {obtenerDominio} from './baseUrls';

const $http = axios.create({
    baseURL: obtenerDominio(),
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Authorization': '',
        'Cache-Control': 'no-cache,no-store',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
    },
});

$http.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
   
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default $http;