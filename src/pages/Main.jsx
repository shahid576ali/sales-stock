import Navbar from '@/components/Navbar'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'

const Main = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default Main