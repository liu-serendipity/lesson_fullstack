import React, {useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Header(props) {
    const [title, setTitle] = useState('首页')
    const {pathname="/"} = useLocation()

    useEffect(() => {
        let _title;
        if (pathname == '/order') {
            _title = '订单'
        }  else if (pathname == '/home' || pathname == '/') {
            _title = '首页'
        }
        setTitle(_title)
    })
  return (
    <header>{title}</header>
  )
}