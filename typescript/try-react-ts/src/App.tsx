import React, { useState } from 'react'
import { Color } from './model/color'
import ColorBrowser from './ColorBrowser'

// 根组件没有特殊需求的话，不加 React.FC
const App = () => {
    // ts 为大型项目而来，容不了一点bug，model
    // ts 用来做大型项目，每一步都很严格，类型约束或接口
    const [color, setColor] = useState<Color>({
        red: 200,
        green: 40,
        blue: 180
    })
    return (
        <>
            <ColorBrowser color={color}/>
        </>
    )
}

export default App