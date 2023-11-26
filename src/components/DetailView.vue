<template>
  <div class="detail">
    <h3>Detail View</h3>
    <div class="detail-title">{{ $route.params.title }}</div>
    <div>
      <comment-form></comment-form>
      <comment-list></comment-list>
    </div>
  </div>
</template>

<script>
import { store } from '@/store'
import CommentForm from "@/store/CommentForm.vue";
import CommentList from "@/store/CommentList.vue";

export default {
  components: { CommentForm, CommentList },
  store,
};
</script>

<style scoped>
</style>