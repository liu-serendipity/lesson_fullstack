import React, { useState, useEffect } from 'react'
import './model.css'

const Model = (props) => {
    // console.log(loading, '------');
    const { visible:show, title, children } = props
    const { onClose, onConfirm } = props
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setVisible(show)
    }, [show])
    const closeModel = () => {
        setVisible(false)
        onClose && onClose()
    }
    const confirm = () => {
        console.log('想要确定吗?')
        setVisible(false)
        onConfirm && onConfirm()
    }
    const maskClick = () => {
        setVisible(false)
        onClose && onClose()
    }
    return (
        visible && <div className="model-wrapper">
            <div className="model">
                <div className="model-title">{title}</div>
                <div className="model-content">{children}</div>
                <div className="model-operator">
                    {/* <button className="model-operator-close" onClick={deleteMask}>取消</button>
                    <button className="model-operator-confirm" onClick={gotoPage}>确定</button> */}
                    <button className="model-operator-close" onClick={closeModel}>取消</button>
                    <button className="model-operator-confirm" onClick={confirm}>确定</button> 
                </div>
            </div>
            <div className="mask" onClick={maskClick}></div>
        </div>
    )
}

export default Model