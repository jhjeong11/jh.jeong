<template>
    <div>
        {{ numberOfCommentCount }}
        {{  }}
    </div>
</template>

<script>
export default {
    computed: {
        numberOfCommentCount() {
            return this.$store.getters['numberOfCommentCount'];
        },
    },
};
</script>