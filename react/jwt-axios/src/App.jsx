import { useState, useEffect } from 'react'
import './App.css'
import { addComment } from '../api/request'

function App() {

  useEffect(() => {
    // localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEyNTgzMiwiaWF0IjoxNjYwMTIwNDQ5LCJleHAiOjE2NjAyMDY4NDl9.CW4wPOEiiWPVcPjIQLqEZo2qP6ez-w386z_B2thiOAc')
    addComment()
      .then(data => {
        console.log(data)
      })
  }, [])

  return (
    <div className="App">
    
    </div>
  )
}

export default App
