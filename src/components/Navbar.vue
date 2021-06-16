<template>
  <nav>
    <div class="logo">
      <router-link :to="{ name: 'Home' }">vue-blog</router-link>
    </div>
    <ul>
      <li>
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'CreatePost' }">Create Post</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  background: #fff;
  position: sticky;
  top: 0;
  left: 0;
}

nav .logo a {
  color: #dfdfdf;
  font-size: 48px;
  text-decoration: none;
}

nav ul {
  list-style-type: none;
}

nav ul li {
  display: inline-block;
}

nav ul li a {
  color: #bbb;
  text-decoration: none;
  margin-left: 20px;
  font-size: 18px;
}

nav ul li a.router-link-active {
  color: #444;
  font-weight: bold;
}

@media screen and (max-width: 480px) {
  nav .logo a {
    font-size: 34px;
  }

  nav ul li a {
    font-size: 16px;
  }
}
</style>