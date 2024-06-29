import { createApp } from 'vue'

import './style.css'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice'

import App from './App.vue'

import { router } from './routes'

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

app.mount('#app')
