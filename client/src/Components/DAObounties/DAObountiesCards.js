import React from "react";
import { ClockIcon, CurrencyDollarIcon } from "@heroicons/react/outline";


const DAObountiesCards = (props) => {
  return (
    <div className="">
      <div className=" grid grid-rows w-[1000px]  px-4 pt-12 sm:pt-20 text-black text-left  ">
        <div className="rounded-xl shadow-2xl w-full p-4 bg-white border-2 border-violet-700 ">
          <img
            className="h-24 rounded-xl mt-[-2rem] object-contain"
            src={props.DAObountiesCards.Image}
          ></img>
          <h3 className="font-bold italic text-3xl my-6 pl-8">
            {props.DAObountiesCards.Heading}
          </h3>
          <p className="text-black text-xl pl-8 italic">
            {props.DAObountiesCards.Description}
          </p>

          <h2 className=" flex font-semibold text-xl my-6 pl-8 ">
            <ClockIcon className="w-[20px] font-semibold mr-2" />
            {props.DAObountiesCards.Time}
          </h2>

          <h2 className=" flex font-semibold text-xl  pl-8 mb-4 ">
            <CurrencyDollarIcon className="w-[22px]  mr-2" />
            {props.DAObountiesCards.Rewards}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DAObountiesCards;
