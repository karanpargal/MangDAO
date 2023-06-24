import React from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import axios from "axios";
import { useAccount } from "@particle-network/connect-react-ui";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const DAOcards = (props) => {
  const account = useAccount();
  const navigate = useNavigate();

  const handleEnter = async () => {
    console.log(account);
    const { data } = await axios.post("http://localhost:8000/checkNFT", {
      publicKey: account,
      dao: props.DAOcards.Heading,
    });
    if (data.data == null) {
      toast.error("No NFT", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return null;
    }
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
    navigate(`/dashboard/${props.DAOcards.Heading}`, { data: props.DAOcards });
  };

  return (
    <div className="">
      <ToastContainer />
      <div
        Name="DAO"
        className="bg-white grid grid-cols-1 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black text-left"
      >
        <div className="rounded-xl shadow-2xl w-full">
          <img
            className="max-h-32 rounded-xl mt-[-4rem] object-contain"
            src={props.DAOcards.Image}
          ></img>
          <h3 className="font-bold text-2xl my-6 pl-8">
            {props.DAOcards.Heading}
          </h3>
          <p className="text-gray-600 text-xl pl-8">
            {props.DAOcards.Description}
          </p>

          <div className="flex justify-end">
            <button
              className="bg-slate-100 p-4 mt-4 rounded-lg border-2 flex items-center mr-5 mb-2"
              onClick={async () => {
                await handleEnter();
              }}
            >
              <p className="text-indigo-600 mr-2">Enter</p>
              <ArrowSmRightIcon className="text-indigo-600 h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAOcards;
