import { useState, useEffect } from 'react'
import axios from 'axios'
import Address from './Address'

function App() {
  const [address, setAddress] = useState([])
  // const [showDialog, setShowDialog] = useState(false)
  useEffect(function() {
    // console.log('--------');
    async function getUserAddress() {
      const { data } = await axios.get('https://www.fastmock.site/mock/cf60839e8e935ccf8e45c671a44a49a3/beers/address')
      // console.log(result);
      if (data && data.length > 0) {
        setAddress([...data])
      }
    }
    getUserAddress();
    // (async function() {

    // })()
  }, [])
  return (
    <div className="App">
      <Address address={address}/>
    </div>
  )
}

export default App
