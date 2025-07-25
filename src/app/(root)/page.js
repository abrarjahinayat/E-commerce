import React from 'react'
import Secondnavbar from '../components/Secondnavbar'
import Banner from '../components/Banner'
import Support from '../components/Support'
import Products from '../components/Products'
import Category from '../components/Category'
import Topselling from '../components/Topselling'

const page = () => {
  return (
    <div>
        <Secondnavbar/>
        <Banner/>
        <Support/>
        <Products/>
        <Category/>
        <Topselling/>
    </div>
  )
}

export default page