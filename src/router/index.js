import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Home || vue-blog"
    }
  },
  {
    path: "/post/:id",
    name: "BlogDetails",
    component: () => import("../views/BlogDetails.vue"),
    props: true,
    meta: {
      title: "Blog Post Details || vue-blog"
    }
  },
  {
    path: "/create",
    name: "CreatePost",
    component: () => import("../views/CreatePost.vue"),
    meta: {
      title: "Create New Post || vue-blog"
    }
  },
  {
    path: "/tags/:tag",
    name: "Tags",
    component: () => import("../views/Tags.vue"),
    props: true,
    meta: {
      title: "Tags || vue-blog"
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(function(to, _, next) {
  document.title = to.meta.title;
  next();
})

export default router
