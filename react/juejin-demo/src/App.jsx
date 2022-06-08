import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Detail from './Detail'
import User from './User'
import Home from './Home'

function App() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   // js 跳转  BOM 原始
  //   setTimeout(() => {
  //     // history.pushState(null, null, '/post/7090222005944844302')
  //     // window.location.href = '/post/70902220059'
  //     navigate('/post/7090222005944844302')
  //   }, 2000)
  // }, [])
  return (
    <div className="App">
      <nav>
        <Link to="/post?id=8090222005944844301">文章一</Link><br/>
        <Link to="/post/7090222005944844302">文章二</Link><br/>
        <Link to="/user">用户</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Detail/>} />
        <Route path="/post/:id" element={<Detail/>} />
        <Route path="/user" element={<User/>} />
      </Routes>
      {/* 404 page element */}
    </div>
  )
}

export default App
