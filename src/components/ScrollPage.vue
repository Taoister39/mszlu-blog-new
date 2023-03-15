<template>
  <div>
    <slot></slot>
    <div
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-background="rgba(245,245,245)"
    ></div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ScrollPage",
  props: {
    loading: Boolean,
    noData: Boolean,
    offset: Number,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
