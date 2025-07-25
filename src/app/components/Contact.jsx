import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  return (
    <section className='bg-secondary-bg py-20'>
        <div className="container">
            <div className='flex items-center justify-between'>
                <div className='flex text-white items-center gap-5'>
                    <FaWhatsapp className='text-5xl' />
                    <p className='font-jost font-normal text-2xl text-white'>Whatsapp Ordering Service</p>
                </div>
                <div className='flex items-center gap-x-3'>
                    <p className='font-jost font-normal text-2xl text-white'>Place Your Orders At </p>
                    <p className='text-primary-bg font-jost font-normal text-2xl'>+1 246-345-0695</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact