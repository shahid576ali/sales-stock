import Navbar from '@/components/Navbar'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

const Main = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    </>
  )
}

export default Main