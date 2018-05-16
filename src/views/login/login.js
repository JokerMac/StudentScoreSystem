import header from '@/components/header/header.vue';
import { login } from '@/api/login.js';
import localStore from '@/common/js/local-store.js';
import * as types from '@/vuex/mutation-types.js';

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
      rememberFlag: true,
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
      const cur = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const account = cur.ruleFormModel.account;
          const password = cur.ruleFormModel.password;
          if (account === 'admin' && password === '123456') {
            return login()
              .then(data => {
                let storeData;
                if (cur.rememberFlag) {
                  storeData = { token: data.token, account: account, password: password };
                } else {
                  storeData = { token: data.token };
                }
                this.$store.commit(types.LOGIN, storeData);

                if (cur.$route.query.redirect) {
                  cur.$router.replace({ path: cur.$route.query.redirect });
                } else {
                  cur.$router.replace({ name: 'booklist' });
                }
              })
              .catch(err => {

              });
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