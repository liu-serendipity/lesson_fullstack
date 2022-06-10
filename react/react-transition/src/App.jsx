import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
// use react hooks
// const Demo = () => {
//     useEffect(() => {
//         console.log('useEffect 来了，老弟');
//         return () => {
//             console.log('useEffect 走了，老弟');
//         }
//     }, [])
//     return (
//         <div>
//             Demo
//         </div>
//     )
// }
const Index = () => {
    useEffect(() => {
        console.log('useEffect => 老弟，你来到 Index 页面');
        return () => {
            console.log('老弟， 你离开了 Index 页面');
        }
    })
    return (
        <>
            Index
        </>
    )
}
const List = () => {
    return (
        <>
            List-Page
        </>
    )
}
function App() {
    const [isShow, setIsShow] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsShow(false)
        }, 1000)
    })
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`useEffect => You clicked ${count} times`);
        return () => {
            console.log('----------');
        }
    }, [count])
    return (
    <div className="container">
        {/* {isShow && <Demo />} */}
        <div>
            <p>You clicked { count } times</p>
            <button onClick={() => setCount(count + 1)}>click me</button>
        </div>
        <ul>
            <li>
                <Link to="/">首页</Link>
            </li>
            <li>
                <Link to="/list">列表</Link>
            </li>
        </ul>
        <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="/list" element={<List/>} />
        </Routes>
    </div>
    )
}

export default App
