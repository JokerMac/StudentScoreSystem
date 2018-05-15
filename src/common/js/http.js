import axios from 'axios';
import localStore from '@/common/js/local-store.js';
import { Message } from 'element-ui';
import * as types from '@/vuex/mutation-types.js';

const http = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
    timeout: 10000
});

http.interceptors.request.use(
    config => {
        let token = localStore.get('token');
        if (token) {
            config.headers['token'] = token;//每个请求的头部信息都带上token。key值可自定义。
        }
        return config;
    },
    error => {
        console.error('err: ' + error);
        Message({
            Message: error.Message,
            type: 'error',
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 未授权 清除token信息并跳转到登录页面
                    this.$store.commit(types.LOGOUT);
                    router.replace({
                        path: 'login',
                        query: { redirect: router.currentRoute.fullPath }
                    });
                    break;
                default:
                    console.error('err: ' + error);
                    Message({
                        Message: error.Message,
                        type: 'error',
                        duration: 5 * 1000
                    });
                    break;
            }
        } else {
            console.error('err: ' + error);
            Message({
                Message: error.Message,
                type: 'error',
                duration: 5 * 1000
            });
        }
        return Promise.reject(error);
    }
);

export default http;