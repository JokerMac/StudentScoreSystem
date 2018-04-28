<template>
    <div class="header">
        <el-header class="header-content">
            <div class="logo-wrapper">
                <a href="" class="logo">后台管理系统BMS</a>
            </div>
            <el-menu :default-active="activeIndex" class="middle-area" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">首页</el-menu-item>
                <!-- <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu> -->
                <el-menu-item index="2">帮助中心</el-menu-item>
                <el-menu-item index="3">
                    关于
                    <!-- <a href="https://www.ele.me" target="_blank">关于</a> -->
                </el-menu-item>
            </el-menu>
        </el-header>
    </div>
</template>

<script type="text/ecmascript-6">
import header from "./header.js";
export default {
  ...header
};
</script>

<style src="./header.less" lang="less" scoped></style>