import { useState } from 'react'
import ColorPicker from './components/colorPicker'
import { Color } from './model/color'
import ColorBrowser from './components/colorBrowser'
import SidebarComponent from './components/sidebarComponent'
import MemberTableComponent from './components/memberTable'

function App() {
  const [isVisible, setVisible] = useState(false)
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
      <div style={{float: 'left'}}>
        <button onClick={() => setVisible(!isVisible)}>Toggle Color</button>
      </div>
      <SidebarComponent isVisible={isVisible}>
        <h1>Cool Scfi movies</h1>
        <ul>
          <li><a href="#">Interstellar</a></li>
          <li><a href="#">Blade Runner</a></li>
          <li><a href="#">a space odyssey</a></li>
        </ul>
      </SidebarComponent>
      <MemberTableComponent />
    </div>
  )
}

export default App
