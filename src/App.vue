<script>
import GoTop from "@/components/GoTop/GoTop.vue";
export default {
  name: "App",
  components: {
    GoTop,
  },
};
</script>

<template>
  <RouterView />
  <GoTop />
</template>

<style scoped></style>
