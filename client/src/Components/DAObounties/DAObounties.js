import React, { useEffect, useState } from "react";
import DAObountiesDetails from "./DAObountiesDetails";
import Earth from "../../Assests/Earth.jpg";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import { ArrowLeftIcon, BackspaceIcon } from "@heroicons/react/outline";

const DAObounties = (props) => {
  const location = useLocation();
  const [bountyData , setBountyData] = useState([]);
  const navigate = useNavigate();

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

    async function fetchData() {
      const { data } = await axios.get(`http://localhost:8000/getBounty?dao=${location.state.data.Heading}`);
      setBountyData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="bg-violet-100 h-screen">
      <ToastContainer />
      <Navbar />
     
      <div className="w-full ">
      
        <div className=" bg-violet-100">
        <ArrowLeftIcon className="h-10 w-10 ml-10 pt-2 text-gray-500 hover:text-gray-900 cursor-pointer" onClick={() => navigate("/Dashboard")}/>
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 ml-12 p1-4">
            <h1 className="py-3 text-3xl md:text-5xl font-bold ">
              {location.state.data.Heading}
            </h1>
            <p className="text-2xl text-gray-600 pt-2">
              {location.state.data.Description}
            </p>
          </div>

          <div className="">
          <h1 className="text-5xl font-bold text-left pl-12 pt-12">Available Bounties</h1>
            <DAObountiesDetails bountyData={bountyData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAObounties;
