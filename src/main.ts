import { createApp } from 'vue'

import './style.css'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice'

import { createPinia } from 'pinia'

import App from './App.vue'

import { router } from './routes'

const pinia = createPinia()

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
  options: {
    cssLayer: {
      name: 'primevue',
      order: 'tailwind-base, primevue, tailwind-utilities',
    },
  },
})
app.use(ToastService)
app.use(router)

app.use(pinia)

app.mount('#app')
