import Vuex from 'vuex';
import Vue from 'vue';
import * as types from './mutation-types.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{},
    mutations:{
        [types.LOGIN](state){
            alert('login');
        },
        [types.LOGOUT](state){

        }
    }
});

export default store;