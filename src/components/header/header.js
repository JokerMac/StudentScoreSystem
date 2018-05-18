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
  data() {
    return {
      activeIndex: this.defaultActiveIndex || '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      debugger;
      if (this.activeIndex === key) {
        return;
      }
      activeIndex = key;
      switch (key) {
        case '1':
          this.$router.push({ path: '/home/library/booklist' });
          break;
        case '2':
          console.log('帮助中心');
          // this.$router.push({ path: '/home/library/booklist' });
          break;
        case '3':
          console.log('关于');
          // this.$router.push({ path: '/home/library/booklist' });
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
    }
  }
};