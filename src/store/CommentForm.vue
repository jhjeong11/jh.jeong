<template>
  <div class="comment-form">
    <input
      v-model="commentText"
      type="text"
      id="commentInput"
      placeholder="댓글을 남겨주세요"
    />
    <button @click="addComment">등록</button>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentText: "",
    };
  },
  methods: {
    addComment() {
      const postId = this.$route.params.id;
      if (this.commentText.trim() !== "") {
        const comment = {
          id: postId,
          text: this.commentText,
        };
        this.$store.dispatch("addComment", { postId, comment });
        console.log(this.$store);
        this.commentText = "";
      }
    },
  },
};
</script>

<style>
input {
  width: 200px;
  height: 50px;
  font-size: 14px;
}
button {
  height: 56px;
  font-size: 14px;
}
</style>