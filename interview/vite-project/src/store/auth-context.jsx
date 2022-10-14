import React, { useState, useEffect } from 'react'
// 1.跨层级共享状态
// createContext value useState => useReducer
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
})
// 2.声明式UI
export const AuthContextProvider = props => {
    // 3. value 响应式，value改了后，界面自动更新 useState
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', 1)
        setIsLoggedIn(true)
    }
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }
    // useEffect
    useEffect(() => {
        // mounted
        const loggedState = localStorage.getItem('isLoggedIn')
        if (loggedState === '1') {
            setIsLoggedIn(true)
        }
    }, [])
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogin: loginHandler,
                onLogout: logoutHandler
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext