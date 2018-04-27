<template>
    <div class="home ac">
        <el-container class="dcw">
            <el-header height="80px">
                Header头部
                <!-- <i class="el-icon-setting">设置</i> -->
                <el-button type="primary" icon="el-icon-setting" size="medium" :autofocus=true :disabled="true" @click="gotoSetting()">设置</el-button>
            </el-header>
            <el-container>
                <el-aside id="test">Aside</el-aside>
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
