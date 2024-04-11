"use client";
import React, { useEffect, useState } from "react";
import Flash_card from "./flsh-card";

const Flash = () => {
  const [time, setTime] = useState();
  const [table, setTable] = useState([]);
  useEffect(() => {
    fetch(
      "https://fakestoreapi.com/products"
    )
      .then((response) => response.json())
      .then((data) => {
        setTable(data);
        // console.log(data);
        // console.log(table);
      });
  }, []);
  return (
    <div>
      <div>
        <div className="flex  items-center gap-2">
          <div className="w-[12px] h-[24px] bg-red-700 rounded-sm"></div>
          <h1 className="text-red-600 font-semibold">Today's</h1>
        </div>
        <div className="flex flex-col justify-start gap-4 sm:gap-8 sm:flex-row">
          <h1 className="text-2xl font-bold text-black">Flash Sales</h1>
          {/* <h1 className="text-2xl font-bold text-black">Flash Sales</h1> */}
        </div>
        <div className="my-8 flex overflow-y-auto gap-x-2">
          {table.map((data:{id:number , image:string , title:string , price : number})=>{
            return (<div key={data.id}>
              <Flash_card image={data.image} title={data.title} rate={data.price}/>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Flash;
