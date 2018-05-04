import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld.vue';
//@ 等价于 /src 这个目录，避免写麻烦又易错的相对路径
import login from '@/views/login/login.vue';
import home from '@/views/home/home.vue';
import booklist from '@/views/library/booklist/booklist.vue';
import borrowRecord from '@/views/library/borrow-record/borrow-record.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      // redirect:'/home/library/booklist'，//当路径为home的时候，重定向到/home/library/booklist，相当于设置默认子路由。
      children:[
        {
          path: 'library/booklist',
          name: 'booklist',
          component: booklist
        },
        {
          path: 'library/borrowRecord/:userId',
          name: 'borrowRecord',
          component: borrowRecord
        }
        // {//当/home匹配成功时渲染的组件，根据需要添加。
        //   path: '',
        //   name: 'borrowRecord',
        //   component: borrowRecord
        // }
      ]
    },
    {
      path:'*',
      redirect:'/'//404重定向
    }
  ]
});
