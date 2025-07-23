import React from 'react'
import supportimg from '../images/supportimg.png'
import Image from 'next/image'
const Support = () => {
  return (
    <section className='bg-[#F7F5EE] py-12'>
        <div className="container">
            <Image src={supportimg} alt="supportimg" />
        </div>
    </section>
  )
}

export default Support