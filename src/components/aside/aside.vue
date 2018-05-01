<template>
    <div class="aside">
        <el-aside class="aside-content">
            <el-menu default-active="1-1" class="el-menu-v" @open="handleOpen" @close="handleClose">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>图书管理</span>
                    </template>
                    <el-menu-item-group>
                        <!-- <template slot="title">分组一</template> -->
                        <el-menu-item index="1-1">书籍列表</el-menu-item>
                        <el-menu-item index="1-2">借阅记录</el-menu-item>
                        <el-menu-item index="1-3">添加书籍</el-menu-item>
                    </el-menu-item-group>
                    <!-- <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu> -->
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">菜谱管理</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">用户列表</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">系统管理</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
    </div>
</template>

<script type="text/ecmascript-6">
import aside from "./aside.js";
export default {
  ...aside
};
</script>

<style src="./aside.less" lang="less" scoped></style>