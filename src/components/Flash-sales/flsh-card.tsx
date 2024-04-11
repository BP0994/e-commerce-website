"use client"
import React from "react";
import iphone from "../../assets/iphone.png";

const Flash_card = ({
  image,
  title,
  rate,
}: {
  image?:  string ;
  title?: string;
  rate?: number;
}) => {
  return (
    <div className=" backdrop-blur-xl bg-white flex flex-wrap justify-around  gap-y-4 ">
      <div className="p-4 rounded w-60   shadow-xl h-[550px]">
        <figure className="	">
          <img
            src={image}
            alt="Shoes max-w-52 max-h-72"
            className="rounded-lg max-w-52 h-72"
          />
        </figure>
        <div className=" items-center text-center  mt-4">
          <h2 className=" text-left ">{title ? title : `iphone14 pro`}</h2>
          <div className="flex justify-start  py-2 ">
            <div className="flex flex-col gap-2 justify-start">
              <h1 className="text-sm text-left text-red-700 font-semibold">{"$ "}
                {rate ? rate : "$120"}
              </h1>
              {/* <div className="rating rating-xs">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-[#FFAD33]"
                  checked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-[#FFAD33]"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flash_card;
