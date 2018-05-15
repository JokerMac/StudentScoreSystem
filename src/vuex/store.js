import Vuex from 'vuex';
import Vue from 'vue';
import * as types from './mutation-types.js';
import localStore from '@/common/js/local-store.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {},
    mutations: {
        [types.LOGIN](state,data) {
            localStore.set('token', data.token);
            //添加vuex的state状态            
        },
        [types.LOGOUT](state) {
            localStore.remove('token');
            //添加vuex的state状态
        }
    }
});

export default store;