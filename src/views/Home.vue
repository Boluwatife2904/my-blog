<template>
  <div class="home">
    <Spinner v-if="isLoading"/>
    <div v-else-if="!isLoading && posts.length === 0">No posts found....</div>
    <PostList :posts="posts" v-else-if="!isLoading && posts.length > 0"/>
    <div v-else>{{ error }}</div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import Spinner from '../components/Spinner.vue';
import getPosts from "../composables/getPosts"
export default {
  components: { PostList, Spinner },
  name: "Home",
  setup() {
    const { isLoading, error, posts, loadData } = getPosts();

    loadData();

    return { posts, error, isLoading };
  },
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
