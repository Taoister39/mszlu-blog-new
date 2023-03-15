<template>
  <el-header class="me-area">
    <el-row class="me-header" justify="center" align="middle">
      <el-col :span="2" class="me-header-left">
        <RouterLink to="/" class="me-title">
          <img src="../assets/img/logo.png" />
        </RouterLink>
      </el-col>
      <el-col :span="12" v-if="!simple">
        <el-menu
          mode="horizontal"
          menu-trigger="click"
          :default-active="activeIndex"
          :router="true"
          active-text-color="#5FB878"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/category/all">文章分类</el-menu-item>
          <el-menu-item index="/tag/all">标签</el-menu-item>
          <el-menu-item index="/archives">文章归档</el-menu-item>

          <el-col :span="4" :offset="4">
            <el-menu-item index="/write">
              <el-icon><Edit /></el-icon>
              写文章</el-menu-item
            >
          </el-col>
        </el-menu>
      </el-col>

      <template v-else>
        <slot></slot>
      </template>

      <el-col :span="6">
        <el-autocomplete v-model="search" placeholder="请输入内容" />
      </el-col>

      <el-col :span="4">
        <el-menu
          :router="true"
          menu-trigger="click"
          mode="horizontal"
          active-text-color="#5FB878"
          :ellipsis="false"
          style="border-bottom: none"
        >
          <template v-if="!user.login">
            <el-menu-item index="/login">
              <el-button type="primary">登录</el-button>
            </el-menu-item>
            <el-menu-item index="/register">
              <el-button type="primary">注册</el-button>
            </el-menu-item>
          </template>

          <template v-else>
            <el-sub-menu index="/">
              <template #title>
                <ElAvatar :src="user.avatar" />
              </template>
              <el-menu-item index="" @click="logout"> 退出 </el-menu-item>
            </el-sub-menu>
          </template>
        </el-menu>
      </el-col>
      <div>
        <el-icon :color="color" @click="changeColor"><Lightning /></el-icon>
      </div>
    </el-row>
  </el-header>
</template>

<script lang="ts">
export default {
  name: "BaseFooter",
  data() {
    return {
      search: "",
      articles: [],
      color: "red",
    };
  },
  props: ["simple", "activeIndex"],
  computed: {
    user() {
      return {
        login: false,
        avatar: "",
      };
    },
  },
  methods: {
    logout() {},
    changeColor() {
      if (this.color == "red") {
        this.color = "black";
      } else {
        this.color = "red";
      }
    },
  },
};
</script>
<style scoped>
.me-title img {
  max-width: 100%;
  max-height: 2.4rem;
}
.me-area {
  position: fixed;
  z-index: 2;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 3px hsla(0, 0%, 7%, 0.1), 0 0 0 1px hsla(0, 0%, 7%, 0.1);
}
.me-header-left {
  margin-top: 15px;
}
</style>
