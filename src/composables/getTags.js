import { ref } from "vue";

const getTags = (posts) => {
  const allTags = ref([]);
  posts.forEach((post) => {
    return post.tags.forEach((tag) => {
      if (allTags.value.indexOf(tag) === -1) {
        allTags.value.push(tag);
      }
    });
  });

  return { allTags };
};

export default getTags;