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
        }
    }
};