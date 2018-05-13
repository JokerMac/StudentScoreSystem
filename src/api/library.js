import http from '@/common/js/http.js';

export const getBookList = () => {
    return http.get('/users').then(res => res.data);
};

export const getPhotos = () => {
    return http.get('/photos').then(res => res.data);
};

let api = {
    getBookList,
    getPhotos
};

export default api;