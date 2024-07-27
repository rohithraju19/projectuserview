import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Viewbooks from './components/Viewbooks'
import Addbooks from './components/Addbooks'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/View' element={<Viewbooks/>}></Route>
      <Route path='/Add' element={<Addbooks/>}></Route>
      </Routes>
      
      </>
  )
}

export default App