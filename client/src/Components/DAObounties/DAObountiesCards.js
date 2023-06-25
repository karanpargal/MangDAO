import React from "react";
import { ClockIcon, CurrencyDollarIcon } from "@heroicons/react/outline";
import { toast, ToastContainer } from "react-toastify";

const DAObountiesCards = (props) => {
  const [showModal, setShowModal] = React.useState(false);

  let button = "Click to Submit";

  if (props.Time < Date.now()) {
    button = "Expired";
  }

  return (
    <div className="">
      <ToastContainer />
      <div className=" grid grid-rows w-[1000px]  px-4 pt-12 sm:pt-20 text-black text-left  ">
        <div className="rounded-xl shadow-2xl w-full p-4 bg-white border-2 border-violet-700 ">
          <img
            className="h-24 rounded-xl mt-[-2rem] object-contain"
            src={props.Image}
          ></img>
          <h3 className="font-bold  text-3xl my-6 pl-8">
            {props.Heading}
          </h3>
          <p className="text-black font-semibold text-xl pl-8 ">{props.Description}</p>

          <h2 className=" flex font-semibold text-xl my-6 pl-8 ">
            <ClockIcon className="w-[20px] font-semibold mr-2" />
            {new Date(props.Time).toLocaleDateString()} 11:59 PM
          </h2>

          <h2 className=" flex font-semibold text-xl  pl-8 mb-4 ">
            <CurrencyDollarIcon className="w-[22px]  mr-2" />
            {props.Rewards}
          </h2>
          <div className="flex justify-end">
            <button
              className="  font-semibold text-xl mb-4 bg-violet-700 text-white p-4 w-48 rounded-lg hover:text-black hover:bg-white hover:border-2 border-violet-700 "
              onClick={() => setShowModal(true)}
            >
              {button}
            </button>
          </div>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Submit your entry
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[500px]">
                      <form>
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          for="username"
                        >
                          Discord ID or Twitter Username
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                          id="username"
                          type="text"
                          placeholder="XYZ#1234 or @xyz"
                          required
                        />
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          for="submission"
                        >
                          Submission Link
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                          id="submission"
                          type="text"
                          placeholder="Medium/Twitter/Github Link"
                        />
                      </form>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          if (
                            document.getElementById("username").value === "" ||
                            document.getElementById("submission").value === ""
                          ){
                            toast.error("Please fill all the fields");
                          }
                          else {
                            toast.success("Submitted Successfully");
                            setShowModal(false);
                          }
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DAObountiesCards;
