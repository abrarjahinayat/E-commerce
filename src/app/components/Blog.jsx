import React from "react";
import blog from "../images/blog.png";
import Image from "next/image";
const Blog = () => {
  return (
    <section className="bg-third-bg py-23">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="font-jost font-medium text-text-primary text-4xl">
            Latest in Blog
          </h2>
          <h5 className="font-jost text-md text-text-primary font-medium">
            SEE ALL BLOG
          </h5>
        </div>
        <div className="flex items-center justify-between mt-9">
          <div className="bg-white w-fit">
            <div>
              <Image width={300} height={300}  src={blog} alt="" />
            </div>
            <div className="px-8">
            <div className="flex gap-x-6 mt-6">
              <p className="font-jost font-normal text-sm text-text-one">
                BY ADMIN
              </p>
              <p className="font-jost font-normal text-sm text-text-one">
                APRIL 05, 2020
              </p>
            </div>
            <p className="w-[212px] font-jost font-normal pb-4 mt-2 text-xl text-text-primary">Woman with good shoes is never be ugly place</p>

            </div>
          </div>  
          <div className="bg-white w-fit">
            <div>
              <Image width={300} height={300}  src={blog} alt="" />
            </div>
            <div className="px-8">
            <div className="flex gap-x-6 mt-6">
              <p className="font-jost font-normal text-sm text-text-one">
                BY ADMIN
              </p>
              <p className="font-jost font-normal text-sm text-text-one">
                APRIL 05, 2020
              </p>
            </div>
            <p className="w-[212px] font-jost font-normal pb-4 mt-2 text-xl text-text-primary">Woman with good shoes is never be ugly place</p>

            </div>
          </div> 
          <div className="bg-white w-fit">
            <div>
              <Image width={300} height={300}  src={blog} alt="" />
            </div>
            <div className="px-8">
            <div className="flex gap-x-6 mt-6">
              <p className="font-jost font-normal text-sm text-text-one">
                BY ADMIN
              </p>
              <p className="font-jost font-normal text-sm text-text-one">
                APRIL 05, 2020
              </p>
            </div>
            <p className="w-[212px] font-jost font-normal pb-4 mt-2 text-xl text-text-primary">Woman with good shoes is never be ugly place</p>

            </div>
          </div>    
            <div className="bg-white w-fit">
            <div>
              <Image width={300} height={300}  src={blog} alt="" />
            </div>
            <div className="px-8">
            <div className="flex gap-x-6 mt-6">
              <p className="font-jost font-normal text-sm text-text-one">
                BY ADMIN
              </p>
              <p className="font-jost font-normal text-sm text-text-one">
                APRIL 05, 2020
              </p>
            </div>
            <p className="w-[212px] font-jost font-normal pb-4   mt-2 text-xl text-text-primary">Woman with good shoes is never be ugly place</p>

            </div>
          </div> 
       
        </div>
      </div>
    </section>
  );
};

export default Blog;
