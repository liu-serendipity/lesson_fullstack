import { useState } from 'react'
import './App.css'
// import Demo from './components/Demo'
import { NewDemo, MyContextProvider } from './components/NewDemo'

function App() {

  return (
    <div className="App">
      {/* <Demo /> */}
      <MyContextProvider>
        <NewDemo />
      </MyContextProvider>
    </div>
  )
}

export default App
