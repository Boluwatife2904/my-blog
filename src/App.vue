<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&display=swap');

* {
  /* margin: 0; */
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Karla', sans-serif;
}

#app {
  color: #2c3e50;
}
</style>
