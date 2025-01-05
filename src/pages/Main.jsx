import Navbar from '@/components/Navbar'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './dashboard/Dashboard'

const Main = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </>
  )
}

export default Main