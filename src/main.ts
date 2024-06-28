import { createApp } from 'vue'

import './style.css'

import App from './App.vue'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Button from 'primevue/button'
import Toast from 'primevue/toast'

import 'primeicons/primeicons.css'
import InputText from 'primevue/inputtext'

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

app.component('Button', Button)
app.component('Toast', Toast)
app.component('InputText', InputText)

app.mount('#app')
