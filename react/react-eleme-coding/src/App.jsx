import { useState } from 'react'
import './App.css'
import { Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'
import Header from './components/Header/index'
import Footer from './components/Footer/index'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/order" element={<Order />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App