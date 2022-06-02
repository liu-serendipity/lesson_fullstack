import { useState, useEffect } from 'react'
import Header from './Header'
import Loader from './Loader'
import Results from './Results'

function App() {
  // 数据驱动的界面
  const [beers, setBeers] = useState([]);
  // 自有状态，加载中效果
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // 优先显示组件，延后加载数据
    (async function() {
      const response = await fetch("http://localhost:8080/beers")
      const data = await response.json()
      setBeers(data)
      setLoading(false)
    })()
  }, [])
  return (
    <div className="wrapper">
      {/* 利用组件化思维  状态思维 */}
      {/* 非自有的props 其实让组件更好的复用及协作 */}
      <Header siteName="Beer me!"/>
      {/* 出现， 不出现？ 状态组件，页面动态的一种状态 */}
      {loading && <Loader message="正在加载啤酒列表..."/>}
      <Results beers={beers} loading={loading}/>
    </div>
  )
}

export default App
