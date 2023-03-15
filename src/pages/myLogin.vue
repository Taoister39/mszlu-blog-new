<template>
  <div id="login" v-title data-title="登录 - 码神之路">
    <div class="me-login-box">
      <h1>码神之路 登录</h1>
      <el-form :rules="rules">
        <el-form-item prop="account">
          <el-input placeholder="用户名" v-model="userForm.account" />
        </el-form-item>
        <el-form-item prop="password" size="normal">
          <el-input
            placeholder="密码"
            size="normal"
            type="password"
            clearable
            v-model="userForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item label="" size="normal">
          <el-button
            class="me-login-button"
            @click.prevent="login('userForm')"
            type="primary"
            size="default"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "myLogin",
  data() {
    return {
      userForm: {
        account: "",
        password: "",
      },
      /**
       * @type {{[key:string]:import('element-plus').FormRules}}
       */
      rules: {
        // trigger 验证的触发方式
        account: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          {
            max: 10,
            message: "不能大于10个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            max: 10,
            message: "不能大于10个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // login(formName) {
    // },
  },
};
</script>
<style scoped>
#login {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.me-login-box {
  width: 300px;
  height: 260px;
  background-color: white;
  padding: 30px;

  border-radius: 10px;
  box-shadow: 0 0 1px 1px rgba(161, 159, 159, 0.1);

  text-align: center;
}
.me-login-button {
  width: 100%;
}
</style>
