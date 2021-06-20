import { ref } from "vue";
import { projectFirestore } from "../firebase/config"

const getPosts = () => {
  const isLoading = ref(false);
  const posts = ref([]);
  const error = ref(null);

  const loadData = async () => {
    isLoading.value = true;
    try {
      const response = await projectFirestore.collection("posts")
        .orderBy("createdAt")
        .get();
      posts.value = response.docs.map(doc => {
        return {...doc.data(), id: doc.id}
      })
      setTimeout(() => {
        isLoading.value = false;
      }, 500)
    } catch (err) {
      isLoading.value = false;
      error.value = err.message;
    }
  };

  return { isLoading, posts, error, loadData };
};

export default getPosts;
