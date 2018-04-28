import header from '@/components/header/header.vue';
import aside from '@/components/aside/aside.vue';
import {Loading} from 'element-ui';
import { Message } from 'element-ui';
export default {
    name: 'home',
    components: {
        'app-header': header,
        'app-aside': aside
    },
    data() {
        return {};
    },
    methods:{
        gotoSetting: function(){
            alert('setting');
        }
    },
    created(){//dom未生成，先从后台请求数据。
    },
    mounted(){//dom已经生成
        //如果要选中某个元素显示Loading的话，页面开始的Loading要放在此处，因为是通过target来获取dom的，如果dom还没生成，就无法获取到对应元素，结果就是loading全屏显示。
        // let loadingInstance = Loading.service({ 
        //     text : '加载中...',
        //     target : '#test',
        //     fullscreen : false
        // });

        //将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。
        // this.$nextTick(()=>{
        //     loadingInstance.close();
        // });
        
        // let msgInstance=Message({type:'success',message:'提示信息',duration:2000,center:true});
        //Loading,Message,MessageBox,Notification,NavMenu（用于左侧菜单）,Tabs标签页（可动态增减标签页）,Breadcrumb面包屑,
        //Dropdown下拉菜单（用在右侧登录头像那里）,Steps步骤条（可用于放置时间）,Dialog 对话框,Tooltip 文字提示,Popover 弹出框（与Tooltip类似）
        //Card 卡片（可以用来做菜单食谱），Carousel 走马灯，

    }
};