<template>
  <div class="spinner"></div>
</template>

<script>
export default {

}
</script>

<style>
.spinner {
  display: block;
  height: 40px;
  width: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: #ff8800;
  border-bottom-color: #663399;
  animation: animate 1200ms infinite;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>