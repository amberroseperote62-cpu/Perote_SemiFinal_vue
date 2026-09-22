import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import MainView from '../views/MainView.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/books',
    component: MainView
  },
  {
    path: '/about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router