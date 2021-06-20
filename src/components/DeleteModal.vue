<template>
  <teleport to="body">
    <div class="modal-overlay" v-if="show">
      <div class="modal">
        <button class="close-modal" @click="toggleDeleteModal">
          <i class="bx bx-x"></i>
        </button>
        <div class="modal-content">
          <div class="close-icon">
            <i class="bx bx-x-circle"></i>
          </div>
          <div class="modal-message">
            <p class="header">Are you sure?</p>
            <p class="message">
              Do you really want to delete this record? This process cannot be
              undone.
            </p>
          </div>
          <div class="modal-actions">
            <button @click="toggleDeleteModal" :disabled="loading">Cancel</button>
            <button @click="performDeleteAction">
              <i
                class="bx bx-loader bx-spin bx-flip-horizontal"
                v-if="loading"
              ></i>
              <span v-else> Delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: "DeleteModal",
  props: ["show", "loading"],
  emits: ["toggle-modal", "delete-post"],
  setup(_, context) {
    const toggleDeleteModal = () => {
      context.emit("toggle-modal");
    };

    const performDeleteAction = () => {
      context.emit("delete-post");
    };

    return { toggleDeleteModal, performDeleteAction };
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #fff;
  padding: 30px;
  border-radius: 6px;
  max-width: 400px;
  width: 95%;
  position: relative;
}

.close-modal {
  position: absolute;
  top: 0px;
  right: 0px;
  background: none;
  border: none;
  outline: none;
  font: inherit;
  font-size: 25px;
  color: rgb(124, 124, 124);
  cursor: pointer;
  padding: 10px;
}

.modal-content {
  text-align: center;
}

.modal-content .close-icon i {
  font-size: 60px;
  color: rgb(255, 79, 114);
}

.modal-content .modal-message {
  margin-bottom: 20px;
}

.modal-content .modal-message .header {
  font-size: 24px;
  font-weight: 500;
  color: rgb(65, 65, 65);
}

.modal-content .modal-message .message {
  font-size: 15px;
  line-height: 22px;
  color: rgb(65, 65, 65);
}

.modal-content .modal-actions button {
  width: 130px;
  max-width: 90%;
  padding: 13px 30px;
  border: none;
  outline: none;
  margin: 5px;
  text-align: center;
  font: inherit;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
}

.modal-content .modal-actions button:first-child {
  background: rgb(199, 199, 199);
}

.modal-content .modal-actions button:last-child {
  background: rgb(255, 79, 114);
}

.modal-content .modal-actions button:disabled {
  cursor: not-allowed;
  background: rgb(240, 240, 240);
  color: grey;
}
</style>