<template>
  <div class="comment_list">
    <li v-for="comment in comments" :key="comment.id">
      {{ comment.text }}
    </li>
  </div>
</template>

<script>
export default {
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  computed: {
    comments() {
      console.log();
      return this.$store.getters.getComments(this.postId).comments;
    },
    numberOfComments() {
      return this.$store.getters.getComments(this.postId).commentCount;
    },
  },
};
</script>

<style>
</style>