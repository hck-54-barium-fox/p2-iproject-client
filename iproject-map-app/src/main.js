import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'
import Toaster from '@meforma/vue-toaster'

import App from './App.vue'
import router from './router'

import './assets/style.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

app.use(pinia)
app.use(router)

app.mount('#app')
