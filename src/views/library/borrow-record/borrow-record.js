import {getPhotos} from '@/api/library.js';

export default {
    name: "borrow-record",
    data() {
        return {
            currentDate: new Date(),
            picList:[],
            userId:''
        };
    },
    methods: {
    },
    created(){
        this.userId=this.$route.params.userId;//获取地址栏传过来的参数
        const cur=this;
        getPhotos()
        .then(function(data){
            cur.picList=data.slice(0,10);
        });
    }
};