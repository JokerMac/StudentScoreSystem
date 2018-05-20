<template>
    <div class="header">
        <el-header class="header-content cf">
            <div class="logo-wrapper">
                <a href="" class="logo">后台管理系统BMS</a>
            </div>
            <el-menu :default-active="activeIndex" class="middle-area" mode="horizontal" @select="handleSelect">
                <template v-if="defaultMenuIsShow">
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
                </template>

                <template v-if="$route.name==='setting'">
                    <el-menu-item index="4">常见问题</el-menu-item>
                </template>
                <slot name="other-menu-items"></slot>
            </el-menu>

            <el-dropdown class="right-area" @command="handleCommand" :hide-timeout=500>
                <div class="el-dropdown-link header-user-logo-wrapper">
                    <img src="./img/user-default-icon.jpg" alt='头像' class="header-user-logo">
                </div>
                <el-dropdown-menu slot="dropdown" class="header-dropdown-menu">
                    <el-dropdown-item command="personal-info">个人信息</el-dropdown-item>
                    <el-dropdown-item command="setting">设置</el-dropdown-item>
                    <el-dropdown-item divided class="header-logout" command="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
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