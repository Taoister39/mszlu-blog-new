<template>
  <el-card>
    <template #header>
      <div class="me-article-header">
        <el-space direction="horizontal">
          <el-link type="success">{{ title }}</el-link>
          <el-link type="success" v-if="weight > 0">置顶</el-link>
        </el-space>
        <el-space direction="horizontal" class="article-header-right">
          <el-icon>
            <Stopwatch />
          </el-icon>
          {{ viewCounts }}
          <el-icon> <Comment /> </el-icon>{{ commentCounts }}
        </el-space>
      </div>
    </template>

    <div class="me-article-description">
      {{ summary }}
    </div>

    <div class="me-article-footer">
      <ElSpace>
        {{ author.nickname }}
        <ElTag v-for="tag in tags" v-bind:key="tag.tagName">{{
          tag.tagName
        }}</ElTag>
      </ElSpace>

      <ElSpace>
        <ElIcon>
          <Timer />
        </ElIcon>
        {{ createDate }}
      </ElSpace>
    </div>
  </el-card>
</template>

<script lang="ts">
import { PropType } from "vue";

class Author {
  nickname: string;
}
interface Tags {
  tagName: string;
}

export default {
  name: "ArticleItem",
  props: {
    id: String,
    weight: Number,
    title: String,
    commentCounts: Number,
    viewCounts: Number,
    summary: String,
    author: Author,
    tags: Array as PropType<Tags[]>,
    createDate: String,
  },
  methods: {
    view(id) {
      this.$router.push({ path: `/view/${id}` });
    },
  },
};
</script>

<style scoped>
.me-article-header {
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.me-article-description {
  margin-bottom: 10px;
}
.article-header-right {
  color: #a6a6a6;
}
.me-article-footer {
  display: flex;
  color: #a6a6a6;
  justify-content: space-between;
}
</style>
