import Vuex from 'vuex';
import Vue from 'vue';
import * as types from './mutation-types.js';
import * as localStoreKey from '@/common/js/local-store-key.js';
import localStore from '@/common/js/local-store.js';

Vue.use(Vuex);

const store = new Vuex.Store({  
    state: {},
    mutations: {
        [types.LOGIN](state, data) {
            // debugger;
            localStore.set(localStoreKey.LOGIN_INFO, data);
            //添加vuex的state状态            
        },
        [types.LOGOUT](state) {
            localStore.remove(localStoreKey.LOGIN_INFO);
            //添加vuex的state状态
        }
    }
});

export default store;