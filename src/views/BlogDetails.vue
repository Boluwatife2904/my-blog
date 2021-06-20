<template>
  <div class="post">
    <DeleteModal 
      @toggle-modal="toggleDeleteModal" 
      @delete-post="deleteBlogPost" 
      :show="showModal"
      :loading="actionInProgress"
      />
    <Spinner v-if="isLoading" />
    <div v-else-if="!isLoading && post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <span v-for="tag in post.tags" :key="tag" class="tag-item">#{{ tag }}</span>
      <button class="delete" @click="toggleDeleteModal">Delete Post</button>
    </div>
    <div v-else>{{ error }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import Spinner from "../components/Spinner.vue";
import DeleteModal from "../components/DeleteModal.vue"
import getSinglePost from "../composables/getSinglePost";
import { projectFirestore } from "../firebase/config";
import { useRouter } from "vue-router";

export default {
  components: { Spinner, DeleteModal },
  props: ["id"],
  setup(props) {
    const router = useRouter();
    const showModal = ref(false);
    const actionInProgress = ref(false);
    const { post, error, isLoading, loadData } = getSinglePost(props.id);
    loadData();

    const toggleDeleteModal = () => {
      showModal.value = !showModal.value;
    }

    const deleteBlogPost = async () => {
      actionInProgress.value = true;
      await projectFirestore.collection("posts").doc(props.id).delete();
      actionInProgress.value = false;
      router.replace({ name: "Home"})
      console.log("Blog Post Deleted Successfully!!!")
    }

    return { post, error, isLoading, showModal, toggleDeleteModal, deleteBlogPost, actionInProgress };
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

.delete {
  border: none;
  border-radius: 6px;
  padding: 12px 20px;
  display: block;
  color: #fff;
  background-color: #ff8800;
  font: inherit;
  cursor: pointer;
  margin: 30px 0;
}
</style>