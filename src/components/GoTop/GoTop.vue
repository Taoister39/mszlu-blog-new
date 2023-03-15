<template>
  <Transition>
    <el-backtop v-show="topShow" :right="40" :bottom="40"></el-backtop>
  </Transition>
</template>
<script>
export default {
  data() {
    return {
      topShow: false,
    };
  },
  methods: {
    needToTop() {
      let currentHeight =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentHeight > 400) {
        this.topShow = true;
      } else {
        this.topShow = false;
      }
    },
  },
};
</script>
<style lang=""></style>
