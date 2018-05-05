import {getPhotos} from '@/api/library.js';

export default {
    name: "borrow-record",
    props:['userId'],
    data() {
        return {
            currentDate: new Date(),
            picList:[]
        };
    },
    methods: {
    },
    created(){
        const cur=this;
        getPhotos()
        .then(function(data){
            cur.picList=data.slice(0,10);
        });
    }
};