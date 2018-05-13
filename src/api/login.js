import http from '@/common/js/http.js';

export const login = () => {
    return http.get('/comments').then(res => {
        /**
         * 测试登录返回token使用。
         */
        res.data = { 'token': '0aeedfvaasdfeicnvbiado' };
        return res.data;
    });
};

let api = {
    login
};

export default api;