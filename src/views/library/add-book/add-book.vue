<template>
    <div class="add-book">
        <el-button type="text" @click="showDialog(true)">添加书籍</el-button>
        <el-dialog title="添加书籍" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="书籍名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="录入日期" :label-width="formLabelWidth">
                    <el-input v-model="form.date" auto-complete="off" placeholder="格式：2018-05-24"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="showDialog(false)">取 消</el-button>
                <el-button type="primary" @click="showDialog(false,true)">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script type="text/ecmascript-6">
import addBook from "./add-book.js";
export default {
  ...addBook
};
</script>

<style src="./add-book.less" lang="less" scoped></style>
