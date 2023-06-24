import React from "react";
import Navbar from "./Navbar";
import { PhoneIcon } from "@heroicons/react/outline";
import Earth from "../Assests/Earth.jpg"

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="flex bg-violet-100 w-full h-[660px] text-black text-left p-4 ">
     
        <div className="grid md:grid-cols-2 max-w-[1240px]   ">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 ">
            <h1 className="py-3 text-3xl md:text-7xl font-bold">
              Tagline comes here
            </h1>
            <p className="text-2xl">
              lorem isum aleit medit edbif sntd en dudb hueevc
            </p>
          </div>
          <div>
            <img className="" alt="IMAGE"></img>
          </div>
        </div>
      </div>

      <div className="bg-violet-100">
        <h1 className="text-5xl font-bold text-left pl-8 pt-12">Features</h1>

      <div className="w-full">
        
      </div>
        <div className=" grid grid-cols-3 lg:grid-cols-3  gap-x-8 px-4   sm:pt-20 text">
          <div className="p-8 bg-white rounded-xl shadow-2xl border-2 border-violet-700">
            <PhoneIcon className="w-16 p-4 bg-violet-700 text-white rounded-lg mt-[-4rem]" />
            <h3 className="font-bold text-2xl my-6">Sales</h3>
            <p className="text-gray-600 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              provident iure placeat blanditiis ea sint earum hic iste quibusdam
              exercitationem.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-2xl border-2 border-violet-700">
            <PhoneIcon className="w-16 p-4 bg-violet-700 text-white rounded-lg mt-[-4rem]" />
            <h3 className="font-bold text-2xl my-6">Sales</h3>
            <p className="text-gray-600 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              provident iure placeat blanditiis ea sint earum hic iste quibusdam
              exercitationem.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-2xl border-2 border-violet-700 ">
            <PhoneIcon className="w-16 p-4 bg-violet-700 text-white rounded-lg mt-[-4rem]" />
            <h3 className="font-bold text-2xl my-6">Sales</h3>
            <p className="text-gray-600 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              provident iure placeat blanditiis ea sint earum hic iste quibusdam
              exercitationem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
