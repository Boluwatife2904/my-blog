<template>
  <div class="home">
    <Spinner v-if="isLoading" />
    <div v-else-if="!isLoading && posts.length === 0">No posts found....</div>
    <div class="layout" v-else-if="!isLoading && posts.length > 0">
      <PostList :posts="posts" />
      <TagCloud :posts="posts"/>
    </div>

    <div v-else>{{ error }}</div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";
import TagCloud from '../components/TagCloud.vue';
import getPosts from "../composables/getPosts";
export default {
  components: { PostList, Spinner, TagCloud },
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

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 20px;
}

@media screen and (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
</style>
