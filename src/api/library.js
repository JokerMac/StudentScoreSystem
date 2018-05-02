import axios from 'axios';

import { Message } from 'element-ui';

const service = axios.create({
    baseURL: 'src/testData',
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

// export 

export const getBookList = params => {
    return service.get('/booklist.json', params).then(res => res.data);
}

// alert(getBookList);

let api = {
    getBookList
}

// alert(api.getBookList);

export default api;