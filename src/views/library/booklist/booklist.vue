<template>
  <div class="book-list">
    书单
      <!-- <el-table
    :data="tableData3"
    style="width: 100%"
    height="250">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
  </el-table> -->
  </div>
</template>

<script type="text/ecmascript-6">
import booklist from "./booklist.js";
export default {
  ...booklist
};
</script>

<style src="./booklist.less"  lang="less" scoped></style>
