import { createRouter, createWebHistory, Router } from 'vue-router'

import LoginView from '../views/Login.vue'
import HomeView from '../views/Home.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

interface Context {
  next: (...params: any[]) => void
  [key: string]: any
}

type Middleware = (context: Context) => void

function nextFactory(
  context: Context,
  middleware: Middleware[],
  index: number,
) {
  const subsequentMiddleware = middleware[index]

  if (!subsequentMiddleware) return context.next

  return (...params: any[]) => {
    context.next(...params)

    const nextMiddleware = nextFactory(context, middleware, index + 1)
    subsequentMiddleware({ ...context, next: nextMiddleware })
  }
}

router.beforeEach((to, from, next) => {
  if (
    to.meta.middleware ||
    to.matched.some((record) => record.meta.middleware)
  ) {
    const fieldMiddleware =
      to.meta.middleware ||
      to.matched.filter((record) => record.meta.middleware)[0].meta.middleware
    const middleware = Array.isArray(fieldMiddleware)
      ? fieldMiddleware
      : [fieldMiddleware]

    const context = {
      from,
      next,
      router,
      to,
    }

    const nextMiddleware = nextFactory(context, middleware, 1)
    return middleware[0]({ ...context, next: nextMiddleware })
  } else next()
})
