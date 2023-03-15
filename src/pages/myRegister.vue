<template>
  <div id="register">
    <div class="me-register-box">
      <h1>码神之路 注册</h1>
      <el-form :model="userForm" ref="form" :rules="rules" size="normal">
        <el-form-item prop="account">
          <el-input v-model="userForm.account" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="nickname" size="normal">
          <el-input
            v-model="userForm.nickname"
            placeholder="昵称"
            size="normal"
            clearable
          ></el-input>
        </el-form-item>

        <el-form-item prop="password" size="normal">
          <el-input
            v-model="userForm.password"
            placeholder="密码"
            size="normal"
            type="password"
            clearable
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="my-register-button" @click="onSubmit"
            >立即创建</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "myRegister",
  data() {
    return {
      userForm: {
        account: "",
        nickname: "",
        password: "",
      },
      /**
       * @type { {[key:string]:import('element-plus').FormRules} }
       */
      rules: {
        account: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
        nickname: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
      },
    };
  },
};
</script>
<style scoped>
#register {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.me-register-box {
  width: 300px;
  height: 260px;
  background-color: white;
  padding: 30px;

  border-radius: 10px;
  box-shadow: 0 0 1px 1px rgba(161, 159, 159, 0.1);

  text-align: center;
}

.my-register-button {
  width: 100%;
}
</style>
