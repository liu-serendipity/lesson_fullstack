import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'  // 一切静态资源皆可import  image video audio

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
