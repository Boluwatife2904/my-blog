<template>
  <div class="create">
    <h2>Create New Blog Post</h2>
    <form @submit.prevent="submitForm" class="create-form">
      <div class="form-control" :class="{ invalid: !title.valid }">
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          v-model.trim="title.value"
          @focus="resetInput(title)"
        />
        <small v-if="!title.valid" class="error">{{ title.message }}</small>
      </div>
      <div class="form-control" :class="{ invalid: !body.valid }">
        <label for="body">Body</label>
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="10"
          @focus="resetInput(body)"
          v-model.trim="body.value"
        ></textarea>
        <small v-if="!body.valid" class="error">{{ body.message }}</small>
      </div>
      <div class="form-control" :class="{ invalid: !tags.valid }">
        <label for="tag">Tags</label>
        <input
          type="text"
          name="tag"
          id="tag"
          v-model.trim="tag"
          @focus="resetInput(tags)"
          @keydown.enter.prevent="handleTagInput"
        />
        <small>Hint: Press enter to add a tag</small>
        <div class="tags-list">
          <span v-for="(tag, index) in tags.value" :key="tag" class="tag"
            >{{ tag }}
            <button @click.prevent="removeTag(index)">X</button></span
          >
        </div>
        <small v-if="!tags.valid" class="error">{{ tags.message }}</small>
      </div>
      <input type="submit" value="Create Blog Post" />
    </form>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "CreatePost",
  setup() {
    const title = reactive({ value: "", valid: true, message: "" });
    const body = reactive({ value: "", valid: true, message: "" });
    const tag = ref("");
    const tags = reactive({ value: [], valid: true, message: "" });
    const formIsInvalid = ref(false);
    const router = useRouter();

    const handleTagInput = () => {
      if (!tags.value.includes(tag.value.toLowerCase())) {
        tags.value.push(tag.value.toLowerCase());
      }
      tag.value = "";
    };

    const removeTag = (index) => {
      tags.value.splice(index, 1);
    };

    const validateForm = () => {
      formIsInvalid.value = false;
      if (title.value === "") {
        title.valid = false;
        title.message = "You need to create a title for the blog post";
        formIsInvalid.value = true;
      }
      if (body.value === "") {
        body.valid = false;
        body.message = "You need to create some content for the blog post";
        formIsInvalid.value = true;
      }
      if (tags.value.length === 0) {
        tags.valid = false;
        tags.message = "You need to provide at least one tag for the blog post";
        formIsInvalid.value = true;
      }
    };

    const resetForm = () => {
      formIsInvalid.value = false;
      tag.value = "";
      title.value = "";
      body.value = "";
      tags.value = [];
    };

    function convertToSlug(title) {
      return title.toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    }

    const submitForm = async () => {
      validateForm();
      if (formIsInvalid.value) {
        return;
      }
      await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.value,
          body: body.value,
          tags: tags.value,
          slug: convertToSlug(title.value),
        }),
      });
      resetForm();
      router.replace("/");
    };

    const resetInput = (input) => {
      input.valid = true;
    };

    return {
      title,
      body,
      tag,
      tags,
      handleTagInput,
      removeTag,
      submitForm,
      resetInput,
    };
  },
};
</script>

<style scoped>
.create {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

h2 {
  text-align: center;
}

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

.create-form .form-control.invalid input,
.create-form .form-control.invalid textarea {
  border-color: crimson;
}

.create-form .form-control.invalid .error {
  color: crimson;
  font-size: 14px;
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
  border-radius: 4px;
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