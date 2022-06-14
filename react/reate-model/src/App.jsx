import { useState } from 'react'
import Model from './components/common/model'
import Welcome from './welcome'

function App() {
  // const [loading, setLoading] = useState(false)
  // const [anew, setAnew] = useState(false)
  const [visible, setVisible] = useState(false)
  // const deleteMask = () => {
  //   setLoading(false)
  // }
  // const gotoPage = () => {
  //   setLoading(false)
  //   setAnew(true)
  // }
  // const changemask = () => {
  //   setLoading(true)
  // }
  const onModelClose = () => {
    console.log('model is closed');
    setVisible(false)
  }
  const onModelConfirm = () => {
    console.log('model is confirmed');
    setVisible(false)
  }
  return (
    <div className="App">
      {/* <button onClick={changemask}>click here</button>
      {
        loading && <Model loading={loading} deleteMask={deleteMask} gotoPage={gotoPage}/>
      }
      {
        anew && <Welcome />
      } */}
      <Model visible={visible} title="登录" onClose={onModelClose} onConfirm={onModelConfirm}>
        <h3>这里是自定义内容区域</h3>
        <p>!!!!!</p>
      </Model>
      <button onClick={() => setVisible(true)}>click here</button>
    </div>
  )
}

export default App
