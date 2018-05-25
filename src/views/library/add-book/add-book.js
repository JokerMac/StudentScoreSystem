// import {getPhotos} from '@/api/library.js';
import { MessageBox } from 'element-ui';

export default {
    name: "add-book",
    data() {
        return {
            dialogFormVisible: false,
            form: {
                name: '',
                date: ''
            },
            formLabelWidth: '120px'
        };
    },
    methods: {
        showDialog: function (showDialogFlag, createBookFlag) {
            this.dialogFormVisible = showDialogFlag;
            if (createBookFlag) {
                alert('创建书籍名称：' + this.form.name + ' 日期：' + this.form.date);
            }
        }
    }
};