import Navbar from '@/components/Navbar'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import User from './otherPages/User'

const Main = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/other/userlist' element={<User />} />
    </Routes>
    </>
  )
}

export default Main