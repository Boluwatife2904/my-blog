<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div class="tags" v-for="tag in allTags" :key="tag">
      <router-link :to="{ name: 'Tags', params: { tag }}">#{{ tag }}</router-link>
    </div>
  </div>
</template>

<script>
import getTags from "../composables/getTags";
export default {
  name: "TagCloud",
  props: ["posts"],
  setup(props) {
    const { allTags } = getTags(props.posts);

    return { allTags }
  },
};
</script>

<style>
.tag-cloud {
  padding: 10px;
}

.tag-cloud h3 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}

.tag-cloud div {
  display: inline-block;
  padding: 10px;
}

.tag-cloud div a {
  color: #ccc;
  text-decoration: none;
}

.tag-cloud div a.router-link-active {
  color: #ff8800;
  font-weight: 600;
}
</style>