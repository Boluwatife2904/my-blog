<template>
  <div class="post-list">
    <SinglePost :post="post" v-for="post in posts" :key="post.id" />
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
export default {
  components: { SinglePost },
  props: ["posts"],
};
</script>

<style>
</style>