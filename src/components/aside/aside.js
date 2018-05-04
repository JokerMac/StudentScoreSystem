// import router from 'vue-router';

export default {
    name: "app-aside",
    data() {
        return {
            activeIndex: '1-1',
            userId :'1234',
            menuObj:{
                'booklist':'1-1',
                'borrowRecord':'1-2'
            }
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        gotoBooklist(){
            this.$router.push({ name: 'booklist' });
        },
        gotoBorrowRecord(){
            // this.$router.push({ path: `library/borrowRecord/${userId}` });
            this.$router.push({ name: 'borrowRecord',params:{userId:this.userId} });
        }
    },
    mounted(){//dom挂载完成，解决刷新页面以后，导航栏的选中项错误的问题。
        this.activeIndex=this.menuObj[this.$route.name];
    }
};