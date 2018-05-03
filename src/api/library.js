import axios from 'axios';

import { Message } from 'element-ui';


const service = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
    timeout: 5000
});

service.interceptors.response.use(
    response => response,
    error => {
        console.log('err: ' + error);
        Message({
            Message: error.Message,
            type: 'error',
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
);

export const getBookList = () => {
    return service.get('/users').then(res => res.data);
};


let api = {
    getBookList
};

export default api;