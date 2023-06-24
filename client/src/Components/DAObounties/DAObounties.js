import React from "react";
import DAObountiesDetails from "./DAObountiesDetails";
import Earth from "../../Assests/Earth.jpg";

const DAObounties = () => {
  return (
    <div>
      <div className="w-full ">
        <div className=" bg-violet-100">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 ml-12 p1-4">
            <h1 className="py-3 text-3xl md:text-5xl font-bold ">
              DAO NAME
            </h1>
            <p className="text-2xl text-gray-600 pt-2">
              lorem isum aleit medit edbif sntd en dudb hueevc
            </p>
          </div>
          
          
          <div className="">
            <DAObountiesDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAObounties;
