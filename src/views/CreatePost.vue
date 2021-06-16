<template>
  <div class="create">
    <h2>Create New Blog Post</h2>
    <form class="create-form">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" v-model="title" />
      </div>
      <div class="form-control">
        <label for="body">Body</label>
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="10"
          v-model="body"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="tag">Tags</label>
        <input
          type="text"
          name="tag"
          id="tag"
          v-model.trim="tag"
          @keydown.enter.prevent="handleTagInput"
        />
        <small>Hint: Press enter to add a tag</small>
        <div class="tags-list">
          <span v-for="(tag, index) in tags" :key="tag" class="tag"
            >{{ tag }} <button @click.prevent="removeTag(index)">X</button></span
          >
        </div>
      </div>
      <input type="submit" value="Create Blog Post" />
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "CreatePost",
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const handleTagInput = () => {
      if (!tags.value.includes(tag.value.toLowerCase())) {
        tags.value.push(tag.value.toLowerCase());
      }
      console.log(tags.value);
      tag.value = "";
    };

    const removeTag = (index) => {
      tags.value.splice(index, 1)
    }

    return { title, body, tag, tags, handleTagInput, removeTag };
  },
};
</script>

<style>
.create-form {
  max-width: 520px;
  width: 95%;
  margin: 30px auto;
  text-align: left;
}

.create-form .form-control {
  margin-bottom: 20px;
}

.create-form .form-control label {
  display: block;
  margin-bottom: 8px;
}

.create-form .form-control input,
.create-form .form-control textarea {
  width: 100%;
  display: block;
  padding: 15px 12px;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  font: inherit;
}

.create-form .form-control input:focus,
.create-form .form-control textarea:focus {
  outline: none;
}

.create-form input[type="submit"] {
  border: none;
  outline: none;
  background-color: #ff8800;
  color: #fff;
  border-radius: 6px;
  padding: 14px 20px;
  font: inherit;
  cursor: pointer;
  transition: all 0.3s linear;
}

.create-form input[type="submit"]:hover {
  background-color: #663399;
}

.tag {
  display: inline-block;
  padding: 6px 10px;
  margin: 10px 10px 0 0;
  background-color: #ff8800;
  border-radius: 30px;
  font-size: 14px;
  line-height: normal;
  color: #fff;
  display: inline-flex;
  align-items: center;
}

.tag button {
  outline: none;
  border: none;
  background: transparent;
  color: #fff;
  font: inherit;
  font-size: 14px;
  cursor: pointer;
  margin: 2px 0 2px 5px;
}
</style>