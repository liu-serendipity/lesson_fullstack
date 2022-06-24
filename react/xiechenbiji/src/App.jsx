import { useState, useEffect } from 'react'
// import logo from './logo.svg'
// import './App.css'
// import { NavBar } from 'antd-mobile'
import Main from './components/Main'
import Header from './components/Header'

function App() {
  
  return (
    <div className="App">
      {/* <NavBar style={{backgroundColor: '#fff', borderBottom: '1px solid #d8d8d8', zIndex:10}}>携程笔记</NavBar> */}
      <Header />
      <Main />
    </div>
  )
}

export default App
