<template>
  <div class="detail" v-if="rowData">
    <h3>
      <div class="detail-name">{{ rowData.id }}. {{ rowData.name }}</div>
      <div class="detail-title">제목 : {{ rowData.title }}</div>
    </h3>
    <div>
      <comment-form :rowData="rowData"></comment-form>
      <comment-list :postId="rowData.id"></comment-list>
    </div>
  </div>
</template>

<script>
import { post } from "@/store/index";

import CommentForm from "@/store/CommentForm.vue";
import CommentList from "@/store/CommentList.vue";

export default {
  data() {
    return {
      rowData: null,
    };
  },
  computed: {
  },
  mounted() {
    const id = this.$route.params.id;
    console.log(id)
    this.rowData = post.externalData.find((item) => item.id === id);
    if (!this.rowData) {
      console.error(`Object with id ${id} not found.`);
    }
  },
  components: { CommentForm, CommentList },
};
</script>

<style>
</style>