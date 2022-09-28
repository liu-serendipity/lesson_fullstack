import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 路由守卫
import './permission'
import element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'

createApp(App)
    .use(router)
    .use(store)
    .use(element3)
    .mount('#app')
