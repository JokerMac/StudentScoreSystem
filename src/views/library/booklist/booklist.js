import library from '@/api/library.js';
// import {getBookList} from '@/api/library.js';
// alert(JSON.stringify(getBookList));
// alert(getBookList);
// alert(library.getBookList);


export default {
    name: "booklist",
    data() {
        return {
        };
    },
    methods: {
    },
    created(){
        // alert(JSON.stringify(library.getBookList));
        return library.getBookList()
        .then(function(){
            debugger;
        });
    }
};