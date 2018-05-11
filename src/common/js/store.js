/**
 * https://github.com/marcuswestin/store.js
 * store.js exposes a simple API for cross-browser local storage:
 * 
 * // Store current user
 * store.set('user', { name:'Marcus' })
 * 
 * // Get current user
 * store.get('user')
 * 
 * // Remove current user
 * store.remove('user')
 * 
 * // Clear all keys
 * store.clearAll()
 * 
 * // Loop over all stored values
 * store.each(function(value, key) {
 *    console.log(key, '==', value)
 * })
 */

import store from 'store';

export const set = (key, value) => {
    return store.set(key, value);
};

export const get = (key) => {
    return store.get(key);
}

export const remove = (key) => {
    return store.remove(key);
};

export const clearAll = () => {
    return store.clearAll();
};

export const getAll = () => {
    let obj = {};
    store.each(function (value, key) {
        obj[key] = value;
    });
    return obj;
};

/**
 * TODO：返回一个遍历所有变量用的函数。
 * 无法实现的话，可以通过getAll获取所有数据，然后在外部用for...in遍历。
 */
export const each = () => {
    return 1;
};



let api = {
    set,
    get,
    remove,
    clearAll,
    getAll,
    each
};

export default api;

