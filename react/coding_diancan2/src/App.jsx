import { useState, lazy, Suspense } from 'react'
import './App.css'
// import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Order from './pages/Order'
// import Mine from './pages/Mine'
// import Find from './pages/Find'
// import Cities from './pages/Cities'
// import HomeDetail from './pages/HomeDetail'
import Header from './components/Header'
import Footer from './components/Footer'
// 推迟加载，运行，按需加载
// 当切换到这个路由后，加载
// const Cities = lazy(() => import('./pages/Cities'))
// const HomeDetail = lazy(() => import('./pages/HomeDetail'))
// const Mine = lazy(() => import('./pages/Mine'))
// const Find = lazy(() => import('./pages/Find'))
// const Order = lazy(() => import('./pages/Order'))
import RoutesConfig from './routes'

function App() {

  return (
    <div className="App">
      <Header/>
      <Suspense fallback={<div>loading...</div>}>
        <RoutesConfig />
      </Suspense>
      <Footer/>
    </div>
  )
}

export default App
