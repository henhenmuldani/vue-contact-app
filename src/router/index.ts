import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import NewContactView from '@/views/NewContactView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/new-contact', name: 'new-contact', component: NewContactView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
