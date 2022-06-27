import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 外面再包一层 数据管理功能  项目做大了，企业里的财务
  // 路由，SPA  BrowserRouter  react-router-dom 组件
  // react 声明式开发
  <Provider store={Store}>
    <BrowserRouter>
    {/* react 组件 */}
      <App />
    </BrowserRouter>
  </Provider>
)