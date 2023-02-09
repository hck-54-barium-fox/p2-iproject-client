import { createApp, markRaw } from 'vue' 
import { createPinia } from 'pinia' 
import App from './App.vue' 
import router from './router' 
import vue3GoogleLogin from 'vue3-google-login';



const app = createApp(App) 
const pinia = createPinia() 

pinia.use(({ store }) => { 
    store.router = markRaw(router) 
})

app.use(vue3GoogleLogin, {
    clientId:
      '315610117518-e50a5g42miv6khjuo6bggirr5dfjm4s0.apps.googleusercontent.com',
  });

app.use(router) 
app.use(pinia) 
app.mount('#app')