import { createMemoryHistory, createRouter, Router } from 'vue-router'

import LoginView from '../views/Login.vue'
import HomeView from '../views/Home.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export const router: Router = createRouter({
  history: createMemoryHistory(),
  routes,
})
