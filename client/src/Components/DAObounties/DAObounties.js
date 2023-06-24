import React, { useEffect } from "react";
import DAObountiesDetails from "./DAObountiesDetails";
import Earth from "../../Assests/Earth.jpg";
import {useLocation} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

const DAObounties = (props) => {
  const location = useLocation();
  console.log(location.state);
  
  useEffect(() => {
    toast.success("NFT Verified", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }, []);
    
  return (
    <div>
      <ToastContainer />
      <div className="w-full ">
        <div className=" bg-violet-100">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 ml-12 p1-4">
            <h1 className="py-3 text-3xl md:text-5xl font-bold ">DAO NAME</h1>
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
