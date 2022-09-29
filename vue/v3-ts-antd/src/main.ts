import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './router/permission'
import 'sanitize.css'
import './styles/index.less'
// import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { Form, Input, Card } from 'ant-design-vue'

createApp(App)
    .use(router)
    .use(Form)
    .use(Input)
    .use(Card)
    .mount('#app')
