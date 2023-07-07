import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'
import store from './store/module-template'

import '@/styles/styles.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'


createApp(App)
    .use(createPinia())
    .use( store )
    .use(router)
    .mount('#app')