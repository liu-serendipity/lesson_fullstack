import React, {useEffect, useState } from 'react'

export default function Header(props) {
    const [title, setTitle] = useState('首页')
   
    useEffect(() => {
        let _title;
        const pathname = window.location.pathname;
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