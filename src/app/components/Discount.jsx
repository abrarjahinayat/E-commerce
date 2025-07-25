import React from 'react'
import discount from '../images/discount.png'
import Image from 'next/image'
import productsimg from "../images/cardsimg.png";
import star from "../images/star.png";

const Discount = () => {
    
  return (
    <section>
        <div className="container">
            <h2 className="font-jost font-medium text-text-primary text-4xl">DISCOUNT</h2>

            <div className='flex items-center justify-around'>
                <div>
                    <Image src={discount} alt="" />
                </div>

                   <div className="flex justify-between">
                <div className="py-7">
                  <div className="border scale-95 hover:scale-105 hover:shadow transition cursor-pointer duration-700 ease-in-out border-gray-300/80 rounded-md w-[255px] pt-10 px-2.5">
                    <Image width={300} height={300} className="mx-auto " src={productsimg} alt="productsimg" />
                    <p className="font-jost font-normal text-md text-text-one mt-15">
                      Fruits
                    </p>
                    <h4 className="font-jost text-text-primary font-normal text-xl py-1.5">
                      Organic Bartlett Pear
                    </h4>
                    <div className="flex items-center gap-x-2">
                      <ul className="flex gap-x-1">
                        <li>
                          <Image src={star} alt="" />
                        </li>
                        <li>
                          <Image src={star} alt="" />
                        </li>
                        <li>
                          <Image src={star} alt="" />
                        </li>
                        <li>
                          <Image src={star} alt="" />
                        </li>
                        <li>
                          <Image src={star} alt="" />
                        </li>
                      </ul>
                      <p className="text-text-one font-normal text-sm font-jost">
                        321,975
                      </p>
                    </div>
                    <h5 className="text-xl font-jost py-2 font-normal text-secondary-bg">
                      $35.90
                    </h5>
                  </div>
                </div> 
                <div className="py-7">
                  <div className="border scale-95 hover:scale-105 hover:shadow transition cursor-pointer duration-700 ease-in-out border-gray-300/80 rounded-md w-[255px] pt-10 px-2.5">
                    <Image width={300} height={300} className="mx-auto " src={productsimg} alt="productsimg" />
                    <p className="font-jost font-normal text-md text-text-one mt-15">
                      Fruits
                    </p>
                    <h4 className="font-jost text-text-primary font-normal text-xl py-1.5">
                      Organic Bartlett Pear
                    </h4>
                    <div className="flex items-center gap-x-2">
                      <ul className="flex gap-x-1">
                        <li>
                          <Image src={star} alt="" />
                        </li>
                        <li>
                          <Image src={star} alt="" />
                        </li>
                        <li>
                          <Image src={star} alt="" />
                        </li>
                        <li>
                          <Image src={star} alt="" />
                        </li>
                        <li>
                          <Image src={star} alt="" />
                        </li>
                      </ul>
                      <p className="text-text-one font-normal text-sm font-jost">
                        321,975
                      </p>
                    </div>
                    <h5 className="text-xl font-jost py-2 font-normal text-secondary-bg">
                      $35.90
                    </h5>
                  </div>
                </div>
                <div className="py-7">
                  <div className="border scale-95 hover:scale-105 hover:shadow transition cursor-pointer duration-700 ease-in-out border-gray-300/80 rounded-md w-[255px] pt-10 px-2.5">
                    <Image width={300} height={300} className="mx-auto " src={productsimg} alt="productsimg" />
                    <p className="font-jost font-normal text-md text-text-one mt-15">
                      Fruits
                    </p>
                    <h4 className="font-jost text-text-primary font-normal text-xl py-1.5">
                      Organic Bartlett Pear
                    </h4>
                    <div className="flex items-center gap-x-2">
                      <ul className="flex gap-x-1">
                        <li>
                          <Image src={star} alt="" />
                        </li>
                        <li>
                          <Image src={star} alt="" />
                        </li>
                        <li>
                          <Image src={star} alt="" />
                        </li>
                        <li>
                          <Image src={star} alt="" />
                        </li>
                        <li>
                          <Image src={star} alt="" />
                        </li>
                      </ul>
                      <p className="text-text-one font-normal text-sm font-jost">
                        321,975
                      </p>
                    </div>
                    <h5 className="text-xl font-jost py-2 font-normal text-secondary-bg">
                      $35.90
                    </h5>
                  </div>
                </div>   
                  <div className="py-7">
                  <div className="border scale-95 hover:scale-105 hover:shadow transition cursor-pointer duration-700 ease-in-out border-gray-300/80 rounded-md w-[255px] pt-10 px-2.5">
                    <Image width={300} height={300} className="mx-auto " src={productsimg} alt="productsimg" />
                    <p className="font-jost font-normal text-md text-text-one mt-15">
                      Fruits
                    </p>
                    <h4 className="font-jost text-text-primary font-normal text-xl py-1.5">
                      Organic Bartlett Pear
                    </h4>
                    <div className="flex items-center gap-x-2">
                      <ul className="flex gap-x-1">
                        <li>
                          <Image src={star} alt="" />
                        </li>
                        <li>
                          <Image src={star} alt="" />
                        </li>
                        <li>
                          <Image src={star} alt="" />
                        </li>
                        <li>
                          <Image src={star} alt="" />
                        </li>
                        <li>
                          <Image src={star} alt="" />
                        </li>
                      </ul>
                      <p className="text-text-one font-normal text-sm font-jost">
                        321,975
                      </p>
                    </div>
                    <h5 className="text-xl font-jost py-2 font-normal text-secondary-bg">
                      $35.90
                    </h5>
                  </div>
                </div>
        
        
                </div>
            </div>
        </div>
    </section>
  )
}

export default Discount