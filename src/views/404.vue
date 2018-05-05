<template>
    <div class="page-not-found">
        <p class="page-container">404 很抱歉，您要访问的页面不存在！</p>
        <el-button size="medium" plain @click="gotoHome()" class="go-to-home">返回首页</el-button>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        name:'page-not-found',
        data(){
            return{};
        },
        methods:{
            gotoHome:function(){//返回首页。通过守卫判断，若已登录则进入首页，未登录则进入登录界面。
               this.$router.replace({ name: 'login' });
            }
        }
    };
</script>

<style scoped>
  .page-container {
      padding-top: 50px;
      font-size: 20px;
      text-align: center;
      color: rgb(192, 204, 218);
  }
  .go-to-home{
      margin-top: 40px;
  }
</style>
