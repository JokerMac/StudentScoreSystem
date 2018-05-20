<template>
  <div id="app">
    <app-header v-if="isHeaderShow"></app-header>
    <router-view/>
  </div>
</template>

<script>
import header from "@/components/header/header.vue";
export default {
  name: "App",
  components: {
    "app-header": header
  },
  data() {
    return {};
  },
  computed: {
    isHeaderShow: function() {//控制头部是否显示，放在data()中无法根据路由进行实时更新。
      if (this.$route.name === "login") {
        return false;
      }
      return true;
    }
  }
};
</script>

<style lang="less">
#app {
  height: 100%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import url("~@/common/less/base.less");
@import url("~@/views/base.less");
</style>
