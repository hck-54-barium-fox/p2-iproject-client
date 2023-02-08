import { createApp,markRaw } from 'vue'
import { createPinia } from 'pinia'
// import Toast from "vue-toastification";
// import Vue from "vue";
// import "vue-toastification/dist/index.css"
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
import './assets/style.css'

const app = createApp(App)
const pinia = createPinia()
app.use(vue3GoogleLogin, {
    clientId: '138981022509-le69kste16ntmh10fo8vo7u82j7rtkou.apps.googleusercontent.com'
  })

pinia.use(({store}) => {
    store.router = markRaw(router)
})
const option = {
    position: "top-left",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 1.21,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
}

app.use(pinia)
app.use(router)
// app.use(Toast,option);

app.mount('#app')
