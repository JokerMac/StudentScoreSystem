// import router from 'vue-router';

export default {
    name: "app-aside",
    data() {
        return {
            activeIndex: '1-1',
            userId: '1234',
            menuObj: {
                'booklist': '1-1',
                'borrowRecord': '1-2'
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
        gotoBooklist() {
            this.$router.push({ name: 'booklist' });
        },
        gotoBorrowRecord() {
            // this.$router.push({ path: `library/borrowRecord/${userId}` });
            this.$router.push({ name: 'borrowRecord', params: { userId: this.userId } });
        },
        updateActiveMenuItem() {//修复经过刷新或者回退以后，头部导航栏的选中项与实际页面不匹配的问题。
            this.activeIndex = this.menuObj[this.$route.name];
            //解决点击浏览器后退按钮时，菜单栏选中项焦点没有改变导致背景颜色错误的问题。
            document.getElementById(this.activeIndex).focus();
        }
    },
    mounted() {//dom挂载完成，解决【刷新页面】以后，导航栏的选中项错误的问题。
        this.updateActiveMenuItem();
    },
    watch: {
        //刷新页面的时候，不会进入watch，所以需要用mounted解决刷新时菜单项选中错误问题。
        //此处用updated不起作用，因为侧边栏组件没有因为地址栏变化而update，只有内容区域有变化。所以只能
        //改用watch监测地址变化来解决选中项错误的问题。
        '$route.name': function (newValue, oldValue) {
            this.updateActiveMenuItem();
        }
    }
};