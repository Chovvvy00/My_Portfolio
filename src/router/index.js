import { createRouter, createWebHistory } from 'vue-router'

import DemoPage from '../pages/DemoPage.vue'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/demo', name: 'demo', component: DemoPage },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 16, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
