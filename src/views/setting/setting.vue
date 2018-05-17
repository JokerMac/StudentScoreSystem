<template>
    <div class="setting ac">
        <app-header>
            <template slot="other-menu-items">
                <el-menu-item index="4">常见问题1</el-menu-item>
                <el-menu-item index="5">常见问题2</el-menu-item>
                <el-menu-item index="6">常见问题3</el-menu-item>
            </template>
        </app-header>
        <div class="dcw">
            <div class="content-wrapper">
                这里是设置页面
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import setting from "./setting.js";
export default {
  ...setting
};
</script>   

<style src="./setting.less"  lang="less" scoped></style>
