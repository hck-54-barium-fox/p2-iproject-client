import { createApp,markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import VueSocialSharing from 'vue-social-sharing'

const app = createApp(App)


const pinia = createPinia();
pinia.use(({ store }) => {
    store.router = markRaw(router)
})
app.use(pinia)
app.use(router)
app.use(VueSocialSharing);


app.mount('#app')
