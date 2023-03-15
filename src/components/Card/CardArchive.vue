<template>
  <el-card :body-style="{ padding: '8px 18px' }">
    <template #header>
      <div class="me-category-header">
        <span>{{ cardHeader }}</span>
      </div></template
    >

    <ul class="me-category-list">
      <li
        v-for="a in archives"
        @click="view(a.year, a.moth)"
        :key="a.year + a.moth"
        class="me-category-item"
      >
        <a>{{ `${a.year}年${a.moth}月${a.count}` }}</a>
      </li>
    </ul>
  </el-card>
</template>
<script>
export default {
  name: "CardArchive",
  props: ["cardHeader", "archives"],
  methods: {
    view(year, moth) {
      this.$router.push({ path: `/archives/${year}/${moth}` });
    },
  },
};
</script>
<style></style>
