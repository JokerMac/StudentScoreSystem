import header from '@/components/header/header.vue';
// import {each} from '@/common/js/store.js';
// import {get} from '@/common/js/store.js';
// import store from '@/common/js/store.js';

export default {
  name: 'login',
  components: {
    'app-header': header
  },
  data() {
    var validateAccount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'));
      } else {
        // if (this.ruleFormModel.checkPass !== '') {
        //   this.$refs.ruleFormModel.validateField('checkAccount');
        // }
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };

    return {
      ruleFormModel: {
        account: 'admin',
        password: '123456'
      },
      rules: {
        account: [
          { validator: validateAccount, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ]
        // checkPass: [
        //   { validator: validatePass2, trigger: 'blur' }
        // ],
        // age: [
        //   { validator: checkAge, trigger: 'blur' }
        // ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      const cur=this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleFormModel.account === 'admin' && this.ruleFormModel.password === '123456') {
            if(cur.$route.query.redirect){
              debugger;
              this.$router.replace({path:cur.$route.query.redirect});
            }else{
              debugger;
              this.$router.replace({ name: 'booklist' });
            }
          }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};