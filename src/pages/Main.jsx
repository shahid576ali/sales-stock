import Navbar from '@/components/Navbar'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Reports from './reports/Reports'
import Task from './task/Task'
import NotFound from './notFound/NotFound'
import User from './users/User'

const Main = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/reports' element={<Reports />} />
      <Route path='/tasks' element={<Task />} />
      <Route path='/users' element={<User />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  )
}

export default Main