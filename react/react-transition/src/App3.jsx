import { useState, useEffect } from 'react'
import './App.css'
import _ from 'lodash'

function App() {
    const Animation = (props) => {
        const {
            animation = false,  // 默认值
            transitionStyles = {enter: {opacity: 1}, leave: {opacity: 0}},
            children
        } = props
        // 函数运行的返回值
        const [status, setStatus] = useState(() => {
            if (animation) return 'enter';
            else return 'leave'
        })
        useEffect(() => setStatus(animation?'enter':'leave'), [animation])
        const prevStyle = children?.props?.style || {};
        const animateStyle = transitionStyles[status];
        const transitionStyle = { transition: `all 300ms ease-in-out`}
        const styles = {...prevStyle, ...animateStyle, ...transitionStyle}
        // return React.cloneElement(
        //     React.children.only(children),
        //     {
        //         style: {
        //             ...styles
        //         }
        //     }
        // )
        return (
            <div style={{...styles}}>
                {children}
            </div>
        )
    }
    const [play, setPlay] = useState(false)
    return (
    <div className="container">
        <button onClick={() => setPlay(!play)}>切换</button>
        <Animation animation={play}>
            <div className="box" style={{fontSize: '20px'}}></div>
        </Animation>
    </div>
    )
}

export default App
