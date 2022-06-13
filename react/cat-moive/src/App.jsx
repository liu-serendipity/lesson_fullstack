import { useState, useEffect } from 'react'
import './App.css'
import classnames from 'classnames'
import 'weui'
import 'react-weui/build/dist/react-weui.css'
import WeUI from 'react-weui'
import Contest from './comments/Contest'

const {
  Toast
} = WeUI;

function App() {
  const [tab, setTab] = useState('all')
  const [showLoading, setShowLoading] = useState(false)
  const [list, setList] = useState([])
  // const [tabClasses, setTabClasses] = useState(['item']); 
  const tabClasses = ['item']
  useEffect(() => {
    setTimeout(() => {
      setTab('dj')
    }, 2000)
  })
  useEffect(() => {
    // console.log('----------||||-------')
    setShowLoading(true)
    fetch('https://www.fastmock.site/mock/759aba4bef0b02794e330cccc1c88555/beers/match')
      .then(data => data.json())
      .then(data => {
        setList([...data])
        setShowLoading(false)
      })
    // setTabClasses([
    //   ...tabClasses,
    //   'current'
    // ])
    // tabClasses.push('current')
    // console.log(tabClasses)
  }, [tab])
  // useEffect(() => {
  //   if (list.length > 0) {
  //     setShowLoading(false)
  //   }
  // })
  return (
    <div className="App">
      <Contest />
      <a href="#" className={classnames('item', {current: tab == 'all'})}>全部</a>
      <Toast icon="waiting-circle" show={showLoading}>加载中</Toast>
    </div>
  )
}

export default App