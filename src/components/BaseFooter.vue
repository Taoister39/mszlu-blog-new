<template>
  <el-footer class="me-area">
    <div class="me-footer">
      <p>
        Design by
        <strong>
          <RouterLink class="me-login-design-color" to="/">码神之路</RouterLink>
        </strong>
      </p>
    </div>
  </el-footer>
</template>
<script lang="ts">
export default {
  name: "BaseFooter",
};
</script>
<style scoped>
/* .me-area {
  min-width: 100%;
  box-shadow: 0 -2px 3px hsla(0, 0%, 7%, 0.1), 0 0 0 1px hsla(0, 0%, 7%, 0.1);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
} */
.me-area {
  background-color: white;
}
.me-footer {
  text-align: center;
  /* line-height: 60px; */
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.me-login-design-color {
  color: #5fb878;
}
</style>
