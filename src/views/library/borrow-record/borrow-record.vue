<template>
  <div class="borrow-record">
    <p>借书的用户id是：{{userId}}</p>
    <el-row class="book-list-wrapper">
      <el-col :span="4" v-for="(item, index) in picList" :key="index" :offset="1">
        <el-card>
          <!-- <img :src="item.url" class="image"> -->
          <img src="@/assets/logo.png" class="image">
          <div class="book-desc-wrapper">
            <div class="bottom">
              <p class="title text-dot" :title=item.title>{{ item.title }}</p>
              <time class="time">{{ currentDate }}</time>
              <div class="btn-wrapper clearfix">
                <el-button type="text" class="button">查看明细</el-button>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import borrowRecord from "./borrow-record.js";
export default {
  ...borrowRecord
};
</script>

<style src="./borrow-record.less" lang="less" scoped></style>
