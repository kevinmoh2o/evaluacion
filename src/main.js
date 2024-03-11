import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'
import store from './store/module-template'
//import { app } from '@/plugins/firebase';
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";


import '@/styles/styles.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'


const vuetify = createVuetify({
    components,
    directives
});

//console.log({nombre:app.name})
createApp(App)
    .use(createPinia())
    .use(vuetify)
    .use(store)
    .use(router)
    .mount('#app')