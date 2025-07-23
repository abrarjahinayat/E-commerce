import React from "react";
import productsimg from "../images/cardsimg.png";
import Image from "next/image";
import star from "../images/star.png";
const Products = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-light font-jost text-text-primary text-4xl">
              Featured Products
            </h2>
          </div>
          <div>
            <ul className="flex gap-x-10">
              <li className="text-md text-text-one cursor-pointer font-medium font-jost hover:text-text-primary">
                Best Sellers{" "}
              </li>
              <li className="text-md text-text-one cursor-pointer font-medium font-jost hover:text-text-primary">
                Most Popular{" "}
              </li>
              <li className="text-md text-text-one cursor-pointer font-medium font-jost hover:text-text-primary">
                Top 20{" "}
              </li>
              <li className="text-md text-text-one cursor-pointer font-medium font-jost hover:text-text-primary">
                Best Rated
              </li>
            </ul>
          </div>
        </div>
        {/* ==== cards section start */}
        <div className="flex justify-between">
        <div className="py-7">
          <div className="border scale-95 hover:scale-105 hover:shadow transition cursor-pointer duration-700 ease-in-out border-gray-300/80 rounded-md w-[300px] pt-10 px-2.5">
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
          <div className="border scale-95 hover:scale-105 hover:shadow transition cursor-pointer duration-700 ease-in-out border-gray-300/80 rounded-md w-[300px] pt-10 px-2.5">
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
          <div className="border scale-95 hover:scale-105 hover:shadow transition cursor-pointer duration-700 ease-in-out border-gray-300/80 rounded-md w-[300px] pt-10 px-2.5">
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
          <div className="border scale-95 hover:scale-105 hover:shadow transition cursor-pointer duration-700 ease-in-out border-gray-300/80 rounded-md w-[300px] pt-10 px-2.5">
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
        {/* == second card section start */}
         <div className="flex justify-between">
        <div className="py-7">
          <div className="border scale-95 hover:scale-105 hover:shadow transition cursor-pointer duration-700 ease-in-out border-gray-300/80 rounded-md w-[300px] pt-10 px-2.5">
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
          <div className="border scale-95 hover:scale-105 hover:shadow transition cursor-pointer duration-700 ease-in-out border-gray-300/80 rounded-md w-[300px] pt-10 px-2.5">
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
          <div className="border scale-95 hover:scale-105 hover:shadow transition cursor-pointer duration-700 ease-in-out border-gray-300/80 rounded-md w-[300px] pt-10 px-2.5">
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
          <div className="border scale-95 hover:scale-105 hover:shadow transition cursor-pointer duration-700 ease-in-out border-gray-300/80 rounded-md w-[300px] pt-10 px-2.5">
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

        {/* === cards section end */}
      </div>
    </section>
  );
};

export default Products;
