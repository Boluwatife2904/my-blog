import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getSinglePost = (id) => {
  const isLoading = ref(false);
  const post = ref(null);
  const error = ref(null);

  const loadData = async () => {
    isLoading.value = true;
    try {
      const response = await projectFirestore.collection("posts").doc(id).get();
      if(!response.exists) {
        const error = new Error("We find load the details of the requested blog post.");
        throw error;
      }
      post.value = { ...response.data(), id: response.id }
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