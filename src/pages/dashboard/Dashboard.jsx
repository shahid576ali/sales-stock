import { StoreContext } from '@/context/storeContext'
import React, { useContext } from 'react'

const Dashboard = () => {
  const {user} = useContext(StoreContext);  
  return (
    <div className='flex items-center justify-center h-screen w-full'>
        <h1 className='text-3xl text-green-500'>Welcome {user.firstName} {user.lastName}  </h1>
    </div>
  )
}

export default Dashboard