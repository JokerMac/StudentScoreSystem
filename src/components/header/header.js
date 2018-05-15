import * as types from '@/vuex/mutation-types.js';
export default {
  name: 'app-header',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleCommand(command){
      switch(command){
        case 'personal-info':
        alert('pi');
          break;
        case 'setting':
        alert('setting');
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