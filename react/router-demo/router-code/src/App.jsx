import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './home'
import About from './About'

function App() {

  return (
    <div className="App">
      <nav>
          <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
      </nav>
      {/* 路由的配置 */}
      <Routes>
        {/* 关于
        首页
        详情页 */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
