import Navbar from '@/components/Dashboard/Navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <main className='min-h-screen'>
      <Navbar />
        {children}
    </main>
  )
}

export default layout