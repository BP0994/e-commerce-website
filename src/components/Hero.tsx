"use client";
import React from "react";
import iphone from "../assets/iphone.png";
import Image from "next/image";
import Apple_logo from "../assets/apple-logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import List_item from "./List-item";




const Hero_Section = () => {
  return (
    <div className="flex justify-between gap-8  border-t-2  py-8">
      <div className="max-w-[20vw]  hidden lg:flex ">
        <div className="w-full">
            <List_item />
        </div>
      </div>
      <div className="w-full  ">
        <div className="  bg-black p-[5vw] rounded-xl">
          <div className="flex  justify-around sm:flex-row-reverse">
            <Image
              src={iphone}
              className="w-[40vw] rounded-lg shadow-2xl"
              alt="iphone"
            />
            <div className="flex-col ">
              <div className="flex flex-col  sm:flex-row gap-[3vw] items-center ">
                <Image src={Apple_logo} className="max-w-[10vw]" alt="" />
                <span className="text-slate-400 text-[1.5vw]">
                  iphone 14 Series
                </span>
              </div>
              <div>
                <h1 className="text-[5vw] leading-[5vw] font-bold text-white max-w-[20vw]">
                  Up to 10% off Voucher
                </h1>
                <p className="py-6 flex items-center gap-[1vw] border-b-gray-100">
                  <span className="text-slate-200 text-[2vw] border-b-1 border-b-gray-200 cursor-pointer hover:text-slate-400">
                    Shop Now{" "}
                  </span>{" "}
                  <FaArrowRightLong color="white" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_Section;
