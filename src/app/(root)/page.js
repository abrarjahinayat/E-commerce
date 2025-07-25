import React from 'react'
import Secondnavbar from '../components/Secondnavbar'
import Banner from '../components/Banner'
import Support from '../components/Support'
import Products from '../components/Products'
import Category from '../components/Category'
import Topselling from '../components/Topselling'
import Discount from '../components/Discount'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

const page = () => {
  return (
    <div>
        <Secondnavbar/>
        <Banner/>
        <Support/>
        <Products/>
        <Category/>
        <Topselling/>
        <Discount/>
        <Blog/>
        <Contact/>
    </div>
  )
}

export default page