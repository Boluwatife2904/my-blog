<template>
  <div class="post">
    <Spinner v-if="isLoading" />
    <div v-else-if="!isLoading && post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <span v-for="tag in post.tags" :key="tag" class="tag-item">#{{ tag }}</span>
    </div>
    <div v-else>{{ error }}</div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import getSinglePost from "../composables/getSinglePost";
export default {
  components: { Spinner },
  props: ["id", "slug"],
  setup(props) {
    const { post, error, isLoading, loadData } = getSinglePost(props.id);
    loadData();
    return { post, error, isLoading };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}

.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}

.post .pre {
  white-space: pre-wrap;
}
</style>