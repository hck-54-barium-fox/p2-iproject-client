import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'
import Toaster from '@meforma/vue-toaster'

import App from './App.vue'
import router from './router'

import './assets/style.css'

const app = createApp(App)
const pinia = createPinia()

app.use(vue3GoogleLogin, {
    clientId: "4150112368-rlmmj62ncpfpqfqvms228kguat3s0qbv.apps.googleusercontent.com"
})

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

app.use(pinia)
app.use(router)

app.mount('#app')
