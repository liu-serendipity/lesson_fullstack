import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// 1. BrowserRouter? 路由组件
// react-router-dom 路由组件库
// 2. 可以给我们的应用添加路由
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
