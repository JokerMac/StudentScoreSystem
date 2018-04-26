<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
#app {
  height: 100%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  > .ac {
    //app-child的简写。app的直接子元素height为100%，就是每一个view的高度。
    height: 100%;
    > .dcw {
      //default-content-wrapper的简写。
      height: 100%;
    }
  }
}

@import url("./common/less/base.less");
</style>
