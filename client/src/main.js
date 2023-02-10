import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index'
import vue3GoogleLogin from 'vue3-google-login'
import CKEditor from '@ckeditor/ckeditor5-vue'

const app = createApp(App)
const pinia = createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router)
})
app.use(vue3GoogleLogin, {
    clientId: '499995755878-mh3pmrp6qje4t3veepsosdhaijh9qdqq.apps.googleusercontent.com'
  })  
app.use(pinia)
app.use(router)
app.use(CKEditor)
app.mount('#app')
