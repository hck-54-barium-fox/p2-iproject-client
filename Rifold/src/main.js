import { createApp,markRaw } from 'vue'
import { createPinia } from 'pinia'
// import Toast from "vue-toastification";
// import Vue from "vue";
// import "vue-toastification/dist/index.css"
import App from './App.vue'
import router from './router'

import './assets/style.css'

const app = createApp(App)
const pinia = createPinia()
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
