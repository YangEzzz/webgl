import { createApp } from 'vue'
import './style.css'
import 'element-plus/dist/index.css'
import router from './router'
import ElementPlus from 'element-plus'
import App from './App.vue'

createApp(App).use(ElementPlus).use(router).mount('#app')
