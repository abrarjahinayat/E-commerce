import React from 'react'
import Navbar from '../components/Navbar'


export default function homepagelayout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}
