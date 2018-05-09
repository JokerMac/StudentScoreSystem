<template>
  <div class="login">
    <!-- <app-header></app-header> -->
    <div class="login-panel">
      <div class="title-wrapper">登录</div>
      <div class="content-wrapper">
        <el-form label-position="left" :model="ruleFormModel" status-icon :rules="rules" ref="ruleFormRef" label-width="60px" class="demo-ruleForm" size="medium">
          <el-form-item label="账号：" prop="account">
            <el-input type="password" v-model="ruleFormModel.account" auto-complete="off" class="user-input"></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="pass">
            <el-input type="password" v-model="ruleFormModel.pass" auto-complete="off" class="user-input"></el-input>
          </el-form-item>
          <!-- <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleFormModel.checkPass" auto-complete="off"></el-input>
          </el-form-item> -->
          <!-- <el-form-item label="年龄" prop="age">
            <el-input v-model.number="ruleFormModel.age"></el-input>
          </el-form-item> -->
          <!-- <el-form-item class="btn-wrapper"> -->
          <div class="btn-wrapper">
            <el-button type="primary" @click="submitForm('ruleFormRef')" class="btn-login">登录</el-button>
          </div>
          <!-- <el-button @click="resetForm('ruleFormRef')">重置</el-button> -->
          <!-- </el-form-item> -->
        </el-form>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import login from "./login.js";
export default {
  ...login
};
</script>

<style src="./login.less"  lang="less" scoped></style>
