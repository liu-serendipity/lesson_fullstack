import { useState } from 'react'
function Dog() {
    let [isBarking, setIsBarking] = useState(false);
    let [isRuning, setIsRunning] = useState(false);
    const handleDogClick = () => {
        // DOM 编程已经一去不复返了
        setIsBarking(true);
        setIsRunning(true);
        setTimeout(() => {
            setIsBarking(false);
            setIsRunning(false);
        }, 2000)
    }
    return (
        // 动态 多个状态
        <div onClick={handleDogClick}>
            <div>Dog</div>
            <p>{isBarking && '汪汪汪'}</p>
            <p>{isRuning && 'runrunrun'}</p>
        </div>
    )
}

export default Dog