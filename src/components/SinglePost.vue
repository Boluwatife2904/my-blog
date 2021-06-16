<template>
  <div class="post">
    <router-link :to="blogLink">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ body }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup(props) {
    const body = computed(() => {
      return props.post.body.substring(0, 100) + "...";
    });
    const blogLink = computed(() => {
      return { name: "BlogDetails", params: { id : props.post.id } };
    });

    return { body, blogLink };
  },
};
</script>

<style>
.post {
  margin: 0 40px 30px 0;
  padding-bottom: 30px;
  border-bottom: 1px dashed #b8b8b8;
}
</style>