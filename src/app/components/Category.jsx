import React from "react";
import productsimg from "../images/cardsimg.png";
import Image from "next/image";
const Category = () => {
  return (
    <section className="bg-third-bg py-25">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="font-jost font-medium text-text-primary text-4xl">
            Shop By Category
          </h2>
          <h5 className="font-jost text-md text-text-primary font-medium">
            SHOP ALL CATEGORIES
          </h5>
        </div>
        {/* ====== category cards ====== */}
        <div className="grid grid-cols-6">
          <div className="w-[200px] cursor-pointer ">
            <div className=" bg-[#FFF] py-3 rounded-2xl mt-10">
              <Image
                className=" mx-auto"
                src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-834/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/meatAndFish.png?q=low&webp=1"
                alt=""
                width={164}
                height={122}
         
              />
            </div>
            <p className="font-medium font-jost font-sm text-text-primary text-center mt-5">
              Fruit
            </p>
          </div>
          <div className="w-[200px] cursor-pointer ">
            <div className=" bg-[#FFF] py-3 rounded-2xl mt-10">
              <Image
                className=" mx-auto"
                src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-834/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/fruitsAndVegs.png?q=low&webp=1"
                alt=""
                width={164}
                height={122}
         
              />
            </div>
            <p className="font-medium font-jost font-sm text-text-primary text-center mt-5">
              Fruit
            </p>
          </div>
           <div className="w-[200px] cursor-pointer ">
            <div className=" bg-[#FFF] py-3 rounded-2xl mt-10">
              <Image
                className=" mx-auto"
                src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-834/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/cooking.png?q=low&webp=1"
                alt=""
                width={164}
                height={122}
         
              />
            </div>
            <p className="font-medium font-jost font-sm text-text-primary text-center mt-5">
              Fruit
            </p>
          </div> 
          <div className="w-[200px] cursor-pointer ">
            <div className=" bg-[#FFF] py-3 rounded-2xl mt-10">
              <Image
                className=" mx-auto"
                src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-834/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/beverages.png?q=low&webp=1"
                alt=""
                width={164}
                height={122}
         
              />
            </div>
            <p className="font-medium font-jost font-sm text-text-primary text-center mt-5">
              Fruit
            </p>
          </div>  
          <div className="w-[200px] cursor-pointer ">
            <div className=" bg-[#FFF] py-3 rounded-2xl mt-10">
              <Image
                className=" mx-auto"
                src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-834/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/pest-control.png?q=low&webp=1"
                alt=""
                width={164}
                height={122}
         
              />
            </div>
            <p className="font-medium font-jost font-sm text-text-primary text-center mt-5">
              Fruit
            </p>
          </div> 
          <div className="w-[200px] cursor-pointer ">
            <div className=" bg-[#FFF] py-3 rounded-2xl mt-10">
              <Image
                className=" mx-auto"
                src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-834/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/stationary.png?q=low&webp=1"
                alt=""
                width={164}
                height={122}
         
              />
            </div>
            <p className="font-medium font-jost font-sm text-text-primary text-center mt-5">
              Fruit
            </p>
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default Category;
