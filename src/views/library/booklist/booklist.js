// import library from '@/api/library.js';
import {getBookList} from '@/api/library.js';

export default {
    name: "booklist",
    data() {
        return {
            userList:[]
        };
    },
    methods: {
    },
    created(){
        // library.getBookList()
        // .then(function(){
        //     debugger;
        // });
        
        const cur=this;
        getBookList()
        .then(function(data){
            cur.userList=data;
        });
    }
};