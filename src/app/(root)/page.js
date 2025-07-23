import React from 'react'
import Secondnavbar from '../components/Secondnavbar'
import Banner from '../components/Banner'
import Support from '../components/Support'
import Products from '../components/Products'

const page = () => {
  return (
    <div>
        <Secondnavbar/>
        <Banner/>
        <Support/>
        <Products/>
    </div>
  )
}

export default page