import { createApp } from 'vue'
import App from './App.vue'
// css 的预编译器 less sass stylus  styled-components
// 不用拘泥于css的语法  加快速度
// 变量，嵌套 { }  mixin 函数   css更像js 更好
import "./common/stylus/index.styl"

createApp(App).mount('#app')
