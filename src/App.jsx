import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App