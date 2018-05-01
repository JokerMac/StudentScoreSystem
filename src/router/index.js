import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld.vue';
//@ 等价于 /src 这个目录，避免写麻烦又易错的相对路径
import login from '@/views/login/login.vue';
import home from '@/views/home/home.vue';
import booklist from '@/views/library/booklist/booklist.vue';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'login',
    //   component: login
    // },
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
        {
          path: 'library/booklist',
          name: 'booklist',
          component: booklist
        }
      ]
    }
  ]
})
