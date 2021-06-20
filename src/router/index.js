import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'Terms',
    component: () => import('../views/terms.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
