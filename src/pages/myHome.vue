<template>
  <div id="home">
    <el-container direction="vertical">
      <BaseHeader :active-index="activeIndex" />
      <RouterView class="me-container" />
      <BaseFooter v-show="footerShow" />
    </el-container>
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
export default {
  name: "myHome",
  components: {
    BaseHeader,
    BaseFooter,
  },
  data() {
    return {
      activeIndex: "/",
      footerShow: true,
    };
  },
};
</script>

<style scoped>
.me-container {
  margin: 100px auto 140px;
}
</style>
