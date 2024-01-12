import { createRouter, createWebHistory } from "vue-router"
import Homepage from '@/components/Homepage.vue'
import NotFound from '../components/pages/NotFound.vue'

import TodoApp from '../components/Sample/TodoApp.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homepage
  },
  {
    path: "/about-us",
    name: "About Us",
    component: () => import('@/components/pages/About.vue')
  },
  {
    path: "/posts",
    name: "Post",
    component: () => import('@/components/pages/Posts.vue')
  },
  {
    path: "/comments",
    name: "Comments",
    component: () => import('@/components/pages/Comments.vue')
  },
  {
    path: "/todo",
    name: "Todo MVP",
    component: () => import('@/components/TodoMVP.vue')
  },
  {
    path: "/posts/:id",
    name: "Post Detail",
    component: () => import('@/components/posts/Detail.vue')
  },
  { path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: "/todo-app",
    name: "Todo App",
    component: () => import('@/components/Sample/TodoApp.vue')
  },
];
console.log('process', import.meta.env.BASE_URL)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;