import { useState } from 'react'
import ColorPicker from './components/colorPicker'
import { Color } from './model/color'
import ColorBrowser from './components/colorBrowser'

function App() {
  // 类型参数 T
  const [color, setColor] = useState<Color>({
    red: 20,
    green: 40,
    blue: 180
  })

  return (
    <div className="App">
      <ColorBrowser color={color}/>
      <ColorPicker 
        color={color}
        onColorUpdated={setColor}
      />
    </div>
  )
}

export default App
