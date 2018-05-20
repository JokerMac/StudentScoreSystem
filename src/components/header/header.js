import * as types from '@/vuex/mutation-types.js';
export default {
  name: 'app-header',
  props: {
    defaultMenuIsShow: {
      default: true,
      type: Boolean
    },
    defaultActiveIndex: {
      default: '1',
      type: String
    }
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  data() {
    return {
      activeIndex: this.defaultActiveIndex || '1',
      menuObj: {
        'booklist': '1',
        'borrowRecord': '1',
        'helpCenter': '2',
        'about': '3'
      }
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (this.activeIndex === key) {
        return;
      }
      this.activeIndex = key;
      switch (key) {
        case '1':
          this.$router.push({ path: '/home/library/booklist' });
          break;
        case '2':
          this.$router.push({ path: '/helpCenter' });
          break;
        case '3':
          this.$router.push({ path: '/about' });
          break;
      }
    },
    handleCommand(command) {
      switch (command) {
        case 'personal-info':
          alert('pi');
          break;
        case 'setting':
          this.$router.push({ path: '/setting' });
          break;
        case 'logout':
          this.$store.commit(types.LOGOUT);
          this.$router.replace({ name: 'login' });
          break;
        default:
          break;
      }
    },
    updateActiveMenuItem() {//修复经过刷新或者回退以后，头部导航栏的选中项与实际页面不匹配的问题。
      this.activeIndex = this.menuObj[this.$route.name];
    }
  },
  mounted() {//dom挂载完成，解决【刷新页面】以后，导航栏的选中项错误的问题。
    this.updateActiveMenuItem();
  },
  updated() {//【直接输入路径及按键操作（后退按钮）】时调用，修复导航栏的选中项错误的问题。
    this.updateActiveMenuItem();
  }
};