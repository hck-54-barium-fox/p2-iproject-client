import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login';

import App from './App.vue'
import router from './router'

import './style.css'

const app = createApp(App)
const pinia = createPinia()

app.use(vue3GoogleLogin, {
  clientId:
    '138287585582-gg4bn1i236kaqe4r96v29t7tuhr6tj1e.apps.googleusercontent.com',
});

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(pinia)
app.use(router)

app.mount('#app')
