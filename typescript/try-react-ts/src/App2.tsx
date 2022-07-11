import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import HelloComponent from './hello'
import NameEditComponent from './nameEdit'

function App() {
  // const [name, setName] = useState("initialName")
  const [name, setName] = useState("defaultUsername")
  const [editingName, setEditingName] = useState("defaultUsername")
  // const setUsernameState = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(e.target.value)
  // }
  const setUsernameState = () => {
    setName(editingName)
  }
  const loadUsername = () => {
    setTimeout(() => {
      setName("name from, async, call")
      setEditingName("name from, async, call")
    }, 500)
  }
  useEffect(() => {
    loadUsername()
  }, [])
  return (
    <div className="App">
      <HelloComponent userName={name} age={20}/>
      {/* <NameEditComponent userName={name} onNameUpdated={setUsernameState}/> */}
      <NameEditComponent
        onEditingNameUpdated={setEditingName}
        initialName={name}
        editingName={editingName}
        onNameUpdated={setUsernameState}
        disabled={editingName == "" || editingName === name}
      />
    </div>
  )
}

export default App
