import { useState, useContext } from 'react'
import AuthContext from './store/auth-context'
import Login from './components/Login/Login'

function App() {
  const authCtx = useContext(AuthContext)
  return (
    <>
      <main>
        { !authCtx.isLoggedIn && <Login /> }
        {/* { authCtx.isLoggedIn && <Home /> } */}
      </main>
    </>
  )
}

export default App
