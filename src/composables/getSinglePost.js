import { ref } from "vue";

const getSinglePost = (id) => {
  const isLoading = ref(false);
  const post = ref(null);
  const error = ref(null);

  const loadData = async () => {
    isLoading.value = true;
    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`);
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(
          responseData.message || "Error fetching blog post details."
        );
        throw error;
      }
      post.value = responseData;
      setTimeout(() => {
        isLoading.value = false;
      }, 500)
    } catch (err) {
      isLoading.value = false;
      error.value = err.message;
    }
  };

  return { post, error, isLoading, loadData }
}

export default getSinglePost;