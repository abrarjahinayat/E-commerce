"use client";
import React, { useState } from "react";
import logo from "../images/logo.png";
import Image from "next/image";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
    const [menubar, setmenubar] =useState(false)

    let handlecategory =()=>{
        setmenubar(!menubar)
    }
      return (
    <section className="bg-primary-bg">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-10 items-center py-5">
            <div>
            <Image src={logo} alt="logo" />
            </div>

            <div className="relative">
                <input className="py-4 w-[544px] px-5 text-text-one text-xl font-jost rounded-md bg-[#FFF]" type="text" placeholder="Search products..." />
                <div onClick={handlecategory} className="flex absolute top-4 right-15 cursor-pointer items-center gap-x-2">
                    <h3 className="text-text-primary font-normal font-jost text-md">All Caterogy</h3>
                    <IoIosArrowUp className="text-xl" />
                </div>
                <span className="absolute right-3 top-3"><IoSearch  className="text-3xl"/></span>


                {
                    menubar &&

                <div className="absolute mt-0.5  right-2">
                    <ul className="bg-white px-8 py-4 rounded-b-md shadow-md  font-jost text-text-primary font-semibold text-xl">
                        <li>Vegetables</li>
                        <li>Fish</li>
                        <li>Fruits</li>
                        <li>Milk</li>
                        <li>Bakery</li>
                    </ul>
                </div>
                }
            </div>
           
          </div>

          <div className="flex text-3xl text-white gap-x-8">
            <IoPersonOutline />
            <CiHeart />
            <IoBagHandleOutline />
            <HiMiniBars3CenterLeft />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
