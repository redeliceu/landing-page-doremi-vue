

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import FontAwesomeIcon from './plugins/fontawesome'

import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
