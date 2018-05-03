<template>
  <div class="book-list">
    <el-table :data="userList" stripe fit style="width: 100%">
      <el-table-column fixed prop="id" label="ID" min-width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" min-width="120">
      </el-table-column>
      <el-table-column prop="username" label="用户名" min-width="120">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" min-width="120">
      </el-table-column>
      <el-table-column prop="phone" label="电话" min-width="300">
      </el-table-column>
      <el-table-column prop="website" label="网址" min-width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
import booklist from "./booklist.js";
export default {
  ...booklist
};
</script>

<style src="./booklist.less" lang="less" scoped></style>
