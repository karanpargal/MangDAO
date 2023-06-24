import React from "react";
import { ClockIcon, CurrencyDollarIcon } from "@heroicons/react/outline";


const DAObountiesCards = (props) => {

  let button = "Submit";

  if(props.Time < Date.now()){
    button = "Expired";
  }

  return (
    <div className="">
      <div className=" grid grid-rows w-[1000px]  px-4 pt-12 sm:pt-20 text-black text-left  ">
        <div className="rounded-xl shadow-2xl w-full p-4 bg-white border-2 border-violet-700 ">
          <img
            className="h-24 rounded-xl mt-[-2rem] object-contain"
            src={props.Image}
          ></img>
          <h3 className="font-bold italic text-3xl my-6 pl-8">
            {props.Heading}
          </h3>
          <p className="text-black text-xl pl-8 italic">
            {props.Description}
          </p>

          <h2 className=" flex font-semibold text-xl my-6 pl-8 ">
            <ClockIcon className="w-[20px] font-semibold mr-2" />
            {new Date(props.Time).toLocaleDateString()} 11:59 PM
          </h2>

          <h2 className=" flex font-semibold text-xl  pl-8 mb-4 ">
            <CurrencyDollarIcon className="w-[22px]  mr-2" />
            {props.Rewards}
          </h2>
          <div className="flex justify-end">
          <button className="  font-semibold text-xl mb-4 bg-violet-700 text-white p-4 w-48 rounded-lg italic hover:text-black hover:bg-white hover:border-2 border-violet-700 ">  
          {button}
          </button>
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default DAObountiesCards;
