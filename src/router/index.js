import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/post/:id",
    name: "BlogDetails",
    component: () => import("../views/BlogDetails.vue"),
    props: true
  },
  {
    path: "/create",
    name: "CreatePost",
    component: () => import("../views/CreatePost.vue ")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
