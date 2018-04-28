<template>
    <div class="home ac">
        <el-container class="dcw">
            <!-- <i class="el-icon-setting">设置</i> -->
            <!-- <el-button type="primary" icon="el-icon-setting" size="medium" :autofocus=true :disabled="true" @click="gotoSetting()">设置</el-button> -->
            <app-header></app-header>

            <el-container class="content-wrapper">
                <!-- <el-aside class="left-nav">Aside</el-aside> -->
                <app-aside class="left-nav"></app-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script type="text/ecmascript-6">
import home from "./home.js";
export default {
  ...home
};
</script>

<style src="./home.less"  lang="less" scoped></style>
