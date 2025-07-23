import React from 'react'

const Products = () => {
  return (
    <section className='py-24'>
        <div className="container">
            <div className='flex items-center justify-between'>
                <div>

                <h2 className='font-light font-jost text-text-primary text-4xl'>Featured Products</h2>
                </div>
                    <div>
                        <ul className='flex gap-x-10'>
                            <li className='text-md text-text-one cursor-pointer font-medium font-jost hover:text-text-primary'>Best Sellers </li>
                            <li className='text-md text-text-one cursor-pointer font-medium font-jost hover:text-text-primary'>Most Popular </li>
                            <li className='text-md text-text-one cursor-pointer font-medium font-jost hover:text-text-primary'>Top 20 </li>
                            <li className='text-md text-text-one cursor-pointer font-medium font-jost hover:text-text-primary'>Best Rated</li>
                        </ul>
                    </div>
            </div>
            <div>
                
            </div>
        </div>
    </section>
  )
}

export default Products