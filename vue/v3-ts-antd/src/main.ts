import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import { router } from './router'
import './router/permission'
import 'sanitize.css'
import './styles/index.less'
// import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { Form, Input, Card, Button, FormItem, Row, Col, Checkbox } from 'ant-design-vue'

createApp(App)
    .use(store)
    .use(router)
    .use(Form)
    .use(Input)
    .use(Card)
    .use(Button)
    .use(FormItem)
    .use(Row)
    .use(Col)
    .use(Checkbox)
    .mount('#app')
