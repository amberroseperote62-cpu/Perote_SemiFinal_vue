import { createRouter, createWebHistory } from 'vue-router'

import Home from '../view/Home.vue'
import Books from '../view/Books.vue'
import About from '../view/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/books',
      component: Books
    },
    {
      path: '/about',
      component: About
    }
  ]
})

export default router