<template>
  <div>
    <el-container class="my-container">
      <el-main class="me-articles">
        <ArticlePage />
      </el-main>

      <el-aside>
        <CardArchive
          cardHeader="最热文章"
          class="aside-card"
          :articles="hotArticles"
        />

        <CardArchive
          cardHeader="文章归档"
          class="aside-card"
          :articles="archives"
        />

        <CardArchive
          cardHeader="最新文章"
          class="aside-card"
          :articles="newArticles"
        />
      </el-aside>
    </el-container>
  </div>
</template>
<script lang="ts">
import CardArchive from "@/components/Card/CardArchive.vue";
import ArticlePage from "@/components/Article/ArticlePage.vue";
export default {
  name: "MainIndex",
  components: {
    CardArchive,
    ArticlePage,
  },
  data() {
    return {
      hotTags: [],
      hotArticles: [],
      newArticles: [],
      archives: [],
    };
  },
};
</script>
<style scoped>
.aside-card {
  margin-top: 20px;
}
.me-articles > * {
  margin-bottom: 1em;
}
.my-container {
  width: 960px;
}
</style>
