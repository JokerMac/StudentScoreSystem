import axios from 'axios';
import localStore from '@/common/js/local-store.js';
import { Message } from 'element-ui';
import * as types from '@/vuex/mutation-types.js';

/**
 * axios使用教程
 * https://www.kancloud.cn/yunye/axios/234845
 * TODO：请求错误catch后的全局处理。
 */

const showErrorMsg = (err, msgDuration = 5 * 1000, msgType = 'error') => {
    console.error(err);
    Message({
        message: err.message,
        type: msgType,
        duration: msgDuration
    });
};

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
        showErrorMsg(error);
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
                    showErrorMsg(error);
                    break;
            }
        } else {
            showErrorMsg(error);
        }
        return Promise.reject(error);
    }
);

export default http;