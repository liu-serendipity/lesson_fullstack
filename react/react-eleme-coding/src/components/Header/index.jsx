import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { pageTitle } from '../../config/index'

const Header = () => {
    // const { title="饿了么" } = props
    const [title, setTitle] = useState("首页")
    const { pathname="/" } = useLocation()
    // console.log(location);
    useEffect(() => {
        // const location = window.location.pathname;
        // console.log(location);
        let _title = pageTitle[pathname] || ''
        // if (pathname == '/order') {
        //     _title = '订单'
        // } else if (pathname == '/home' || pathname == '/') {
        //     _title = '首页'
        // }
        setTitle(_title)
    })
    return (
        <div>
            {title}
        </div>
    )
}

export default Header
