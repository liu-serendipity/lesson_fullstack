// import React, { useState } from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// root 节点 根节点
// root 节点范围内react起作用
// html -> js
// JSX js 扩展语法，只在react中可以生效
// react 用来表达UI组件
// JSX 优点 UI 简单 方便
// JSX  class不能用，得用className
// js  class 关键字
// let name = 'llm';
// // jsx 模板
// const element = <h1 className="llm-bd">hello {name}</h1>;
// // 自定义组件
// const Hello = () => {
//   // jsx 
//   return <div>Hello {name}</div>
// }
// let [dateStr, setDataStr] = useState(new Date().toLocaleTimeString());
// let dateStr = new Date().toLocaleTimeString();
// setInterval(() => {
//   dateStr = new Date().toLocaleTimeString();
// }, 1000);
// ReactDOM.createRoot(document.getElementById('root')).render(
//   // element
//   // <Hello></Hello>
//   // UI 大舞台
//   <div>
//     <h1>Hello world</h1>
//     <h2>现在是 {dateStr}</h2>
//   </div>
// )


// 引入react框架，叫react
// import from  es6 模块化方案
// react + react dom
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // css 也可以用import
import App from './App';  // 引入了根组件模块

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <App></App>
)