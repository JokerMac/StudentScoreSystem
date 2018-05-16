import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld.vue';
//@ 等价于 /src 这个目录，避免写麻烦又易错的相对路径
import login from '@/views/login/login.vue';
import home from '@/views/home/home.vue';
import booklist from '@/views/library/booklist/booklist.vue';
import borrowRecord from '@/views/library/borrow-record/borrow-record.vue';
import pageNotFound from '@/views/404.vue';

import localStore from '@/common/js/local-store.js';
import * as localStoreKey from '@/common/js/local-store-key.js';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      redirect: '/home/library/booklist',//当路径为home的时候，重定向到/home/library/booklist，相当于设置默认子路由。
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: 'library/booklist',
          name: 'booklist',
          component: booklist
        },
        {
          path: 'library/borrowRecord/:userId',
          name: 'borrowRecord',
          component: borrowRecord,
          props: true//props被设置为 true，route.params将会被设置为组件属性。
        },
        // {//当/home匹配成功时渲染的组件，根据需要添加。
        //   path: '',
        //   name: 'booklist',
        //   component: booklist
        // }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: pageNotFound
    },
    {
      path: '*',
      redirect: '/404'//404重定向
    }
  ]
});

router.beforeEach((to, from, next) => {
  //匹配到的路由里有需要登录验证的，则跳转到登录页面。
  const needAuth = (to.matched.findIndex((item) => { return item.meta.requireAuth === true }) > -1) ? true : false;
  if (needAuth) {//需要验证，分为已经登录了（有token且token未过期）和未登录的情况。已登录直接跳转到指定页面，未登录则跳转到login页面。
    let loginInfo = localStore.get(localStoreKey.LOGIN_INFO);
    if (loginInfo && loginInfo.token) {//token有效，直接进入该页面
      next();
    } else {//token无效，进入登录页面，登录成功后再进入该页面
      // next({ path: '/login', replace: true });
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next();
  }
});

export default router;