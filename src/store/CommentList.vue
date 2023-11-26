<template>
  <div>
    <ul>
      <li v-for="comment in comments" :key="comment.timestamp">
        {{ comment.text }} - {{ comment.timestamp }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    comments() {
      return this.$store.getters.getComments;
    },
  },
};
</script>