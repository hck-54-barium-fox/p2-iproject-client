import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'
import App from './App.vue'
import router from './router'

import 'mdb-vue-ui-kit/css/mdb.min.css';

const app = createApp(App)
const pinia = createPinia()

app.use(vue3GoogleLogin, {
    clientId: '429305558584-8rt06p8qisja6qs5fco5d3edm3skk2gs.apps.googleusercontent.com'
})

pinia.use(({store}) => {
    store.router = markRaw(router)
})

app.use(pinia)
app.use(router)

app.mount('#app')
