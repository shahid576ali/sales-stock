import Navbar from '@/components/Navbar'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import User from './otherPages/User'
import TaskReports from './reports/Reports'
import Home from './home/Home'

const Main = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/other/userlist' element={<User />} />
      <Route path='/reports' element={<TaskReports />} />
    </Routes>
    </>
  )
}

export default Main