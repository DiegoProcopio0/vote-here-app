import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router'

import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'
import HomeView from '../views/Home.vue'
import NotFoundView from '../views/NotFound.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'HomeView', component: HomeView },
  { path: '/login', name: 'LoginView', component: LoginView },
  { path: '/register', name: 'RegisterView', component: RegisterView },
  { path: '/404', name: 'NotFound', component: NotFoundView },
  { path: '/:catchAll(.*)*', redirect: '/404' },
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
