import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/BigScreen'
    },
    {
      path: '/BigScreen',
      name: 'BigScreen',
      component: () => import('../views/BigScreen/index.vue')
    }
  ]
})

export default router
