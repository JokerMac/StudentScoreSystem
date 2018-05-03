// import router from 'vue-router';

export default {
    name: "app-aside",
    data() {
        return {
            activeIndex: '1'
            // activeIndex2: '1'
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
            this.$router.push({ path: `/library/booklist` });
        },
        gotoBorrowRecord(){
            const userId = 123;
            this.$router.push({ path: `/library/borrowRecord/${userId}` });
        }
    }
};