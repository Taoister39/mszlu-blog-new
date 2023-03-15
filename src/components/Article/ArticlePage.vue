<template>
  <ScrollPage :loading="loading">
    <ArticleItem
      v-for="article in articles"
      :key="article.id"
      v-bind="article"
      class="article-item"
    />
  </ScrollPage>
</template>
<script lang="ts">
import ScrollPage from "@/components/ScrollPage.vue";
import ArticleItem from "@/components/Article/ArticleItem.vue";
import { getArticlesApi } from "@/api/articles.js";
import { ElMessage } from "element-plus";

export default {
  name: "ArticlePage",
  data() {
    return {
      articles: [],
      innerPage: {
        pageSize: 5,
        pageNumber: 1,
        name: "article.createDate",
        sort: "desc",
      },
      noData: false,
      query: {
        year: 1,
        moth: 1,
      },
      loading: true,
    };
  },
  components: {
    ArticleItem,
    ScrollPage,
  },
  methods: {
    async getArticles() {
      try {
        const { data } = await getArticlesApi(this.query, this.innerPage);
        const newArticles = data.data;

        console.log(data);

        if (newArticles && newArticles.length > 0) {
          this.innerPage.pageNumber += 1;
          this.articles = this.articles.concat(newArticles);
        } else {
          this.noData = true;
        }
      } catch (error) {
        ElMessage({
          message: "获取文章列表失败",
          showClose: true,
        });
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.getArticles();
  },
};
</script>
<style lang="css" scoped>
.article-item:not(:first-child) {
  margin-top: 10px;
}
</style>
