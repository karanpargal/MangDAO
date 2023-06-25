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
      toast.error(`You don't own NFT for ${props.DAOcards.Heading}.`, {
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

    navigate(`/Dashboard/${props.DAOcards.Heading}`, {
      state: { data: props.DAOcards },
    });
  };

  return (
    <div className="">
      <ToastContainer />
      <div
        Name="DAO"
        className=" grid grid-cols-1 relative gap-x-8 gap-y-16 px-4 mt-10 sm:mt-20 text-black text-left hover:z-10"
      >
        <div className=" bg-white rounded-xl  w-full shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
          <img
            className="max-h-32 rounded-xl mt-[-4rem] object-contain mt-2 ml-6 border-2"
            src={props.DAOcards.Image}
          ></img>
          <h3 className="font-bold text-2xl my-6 pl-8">
            {props.DAOcards.Heading}
          </h3>
          <p className="text-gray-600 font-semibold text-xl pl-8">
            {props.DAOcards.Description}
          </p>

          <div className="flex justify-end">
            <button
              className="bg-white text-black text-lg border-2 border-violet-700 p-2 w-32 mt-4 pl-8 rounded-lg border-2 flex items-center mr-5 mb-4 hover:bg-violet-600 hover:text-white hover:border-none"
              onClick={async () => {
                await handleEnter();
              }}
            >
              <p className="font-semibold mr-4">Enter</p>
              <ArrowSmRightIcon className=" h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAOcards;
