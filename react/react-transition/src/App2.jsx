import { useState } from 'react'
import './App.css'
import _ from 'lodash'

function App() {
  const [value, setValue] = useState('')
  let currentValue = ''
  const handleChange = (e) => {
    currentValue = e.target.value;
    setValue(currentValue)

  }
  return (
    <div className="container">
      <input type="text" onChange={_.debounce(handleChange, 300)} />
      <div>{value}</div>
      <div className="list">
        {
          Array(100)
            .fill("a")
            .map((item, index) => (
              <div key={index}>{value}</div>
              ))
        }
      </div>
    </div>
  )
}

export default App
