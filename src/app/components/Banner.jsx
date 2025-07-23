import React from "react";
import bannerimg from '../images/bannerimg.png'
import Image from "next/image";
const Banner = () => {
  return (
    <section className="bg-[#F3E8D6] bg-[url('/images/bannerbg.png')] bg-cover bg-no-repeat py-40 ">
      <div className="container">
        <div className="flex items-center justify-between">

        <div>
          <h2 className="text-text-secondary text-md font-medium uppercase font-jost ">
            Shop our freshest
          </h2>
          <h1 className="text-primary-bg py-4 font-bold text-5xl w-[710px] leading-15">Fresh Hand-Picked Vegetables <span className="text-text-secondary">Everyday</span></h1>
          <p className="uppercase text-md font-jost font-medium text-text-primary py-5">Discovermore</p>
        </div>
        <div>
            <Image src={bannerimg} alt="bannerimg" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
