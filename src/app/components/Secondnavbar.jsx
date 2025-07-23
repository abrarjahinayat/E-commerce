import React from 'react'

const Secondnavbar = () => {
  return (
    <section className='bg-secondary-bg'>
        <div className="container">
            <div className='flex justify-between items-center'>
                <div>
                    <ul className='flex items-center py-5 gap-x-10 '>
                        <li className='font-medium text-white text-md font-jost'>HOME</li>
                        <li className='font-medium text-white text-md font-jost'>SHOP</li>
                        <li className='font-medium text-white text-md font-jost'>COLLECTION</li>
                        <li className='font-medium text-white text-md font-jost'>JOURNAL</li>
                        <li className='font-medium text-white text-md font-jost'>LOOKBOOK__PAGES</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex items-center py-5 gap-x-10 '>
                        <li className='font-medium text-white text-md font-jost'>SPECIAL OFFER </li>
                        <li className='font-medium text-white text-md font-jost'>PURCHASE THEME</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Secondnavbar