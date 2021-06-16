import { ref } from "vue";

const getPosts = () => {
  const isLoading = ref(false);
  const posts = ref([]);
  const error = ref(null);

  const loadData = async () => {
    isLoading.value = true;
    try {
      const response = await fetch("http://localhost:3000/posts");
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to load posts."
        );
        throw error;
      }
      posts.value = responseData;
      setTimeout(() => {
        isLoading.value = false;
      }, 2000)
    } catch (err) {
      isLoading.value = false;
      error.value = err.message;
    }
  };

  return { isLoading, posts, error, loadData };
};

export default getPosts;
