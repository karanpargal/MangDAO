import React from "react";
import Superteam from "../../Assests/Superteam.jpg";
import DAOcards from "./DAOcards";
import {motion} from "framer-motion"

const DAOdetails = () => {


  const DAOcardsVariant={
    hidden:{
      x:-10,
      opacity:0


    },
    visible:{
      x:0,
      opacity:1,
      
    }
  }
  const DAOcardsData = [
    {
      Image: Superteam,
      Heading: "Superteam",
      Description: "Lorem ipsum matilda elit da capsus whateva list gdreol ",
      Button: "Join",
    },
    {
      Image: Superteam,
      Heading: "Superteam",
      Description: "Lorem ipsum matilda elit da capsus whateva list gdreol ",
      Button: "Join",
    },

    {
      Image: Superteam,
      Heading: "Superteam",
      Description: "Lorem ipsum matilda elit da capsus whateva list gdreol ",
      Button: "Join",
    },

    {
      Image: Superteam,
      Heading: "Superteam",
      Description: "Lorem ipsum matilda elit da capsus whateva list gdreol ",
      Button: "Join",
    },

    {
      Image: Superteam,
      Heading: "Superteam",
      Description: "Lorem ipsum matilda elit da capsus whateva list gdreol ",
      Button: "Join",
    },
  ];
  console.log(DAOcardsData);
  return (
    <div id="ListDetails">
      {/* <div className="">
        <DAOcards DAOcards={DAOcardsData[0]} />
        <DAOcards DAOcards={DAOcardsData[1]} />
        <DAOcards DAOcards={DAOcardsData[2]} />
        <DAOcards DAOcards={DAOcardsData[3]} />
        <DAOcards DAOcards={DAOcardsData[4]} />
       
      </div> */}

      <div>
        <motion.div>
          { DAOcardsData.map((data) => {
            return <DAOcards DAOcards={data} animate="visible" initial="hidden" variants={DAOcardsVariant} />})}
        </motion.div>
      </div>
    </div>
   
  );
};

export default DAOdetails;
