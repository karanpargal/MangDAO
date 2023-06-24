import React from 'react'
import { ArrowSmRightIcon } from '@heroicons/react/outline';

const DAOcards = (props) => {
    return (
        <div className=" " >
          <div Name="DAO" className="grid grid-cols-1 lg:grid-cols-3  relative gap-x-8 gap-y-16 px-4 pt-12  sm:pt-20 text-black text-left ">
        <div className="bg-white rounded-xl shadow-2xl w-[400px] ">
          <img
            className="max-h-32 w-full rounded-xl mt-[-4rem]"
            src={props.DAOcards.Image}
          ></img>
          <h3 className="font-bold text-2xl my-6 pl-8 " >
          {props.DAOcards.Heading}</h3>
          <p className="text-gray-600 text-xl pl-8">
            {props.DAOcards.Description}
          </p>

          <div className="flex bg-slate-100 pl-4 py-4 mt-4">
          <ArrowSmRightIcon className=" w-5  text-indigo-600" />
            <button className=" item-center text-indigo-600 ">
              
              
              {props.DAOcards.Button}
            </button>
          </div>
        </div>
        </div>
        </div>
       
      );
    };
    


export default DAOcards