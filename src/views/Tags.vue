<template>
  <div class="tags">
    <Spinner v-if="isLoading" />
    <div v-else-if="!isLoading && filteredPostsWithTags.length === 0">
      We couldn't find any posts matching the selected tag....
    </div>
    <div class="layout" v-else-if="!isLoading && filteredPostsWithTags.length > 0">
      <PostList :posts="filteredPostsWithTags" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>{{ error }}</div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner.vue";
import PostList from "../components/PostList.vue";
import TagCloud from '../components/TagCloud.vue';
export default {
  components: { Spinner, PostList, TagCloud },
  name: "Tags",
  props: ["tag"],
  setup() {
    const route = useRoute();
    const { posts, error, isLoading, loadData } = getPosts();

    loadData();

    const filteredPostsWithTags = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    return { posts, isLoading, error, filteredPostsWithTags };
  },
};
</script>

<style>
.tags {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>