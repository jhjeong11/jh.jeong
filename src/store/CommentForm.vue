<template>
    <div>
        <textarea v-model="newComment" placeholder="댓글을 남겨주세요"></textarea>
        <button @click="addComment">등록</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newComment: '',
        };
    },
    methods: {
        addComment() {
            if (this.newComment.trim() !== '') {
                this.$store.dispatch('addComment', {
                    text: this.newComment,
                    timestamp: new Date(),
                });
                this.newComment = '';
            }
        },
    },
};
</script>


