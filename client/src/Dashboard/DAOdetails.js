import React from "react";
import Superteam from "../Assests/Superteam.jpg";
import DAOcards from "./DAOcards";

const DAOdetails = () => {
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
      Image:  Superteam,
      Heading: "Superteam",
      Description: "Lorem ipsum matilda elit da capsus whateva list gdreol ",
      Button: "Join",
    },
  ];
  console.log(DAOcardsData);
  return (
    <div id="ListDetails">
      <div className="">
        <DAOcards DAOcards={DAOcardsData[0]} />
        <DAOcards DAOcards={DAOcardsData[1]} />
        <DAOcards DAOcards={DAOcardsData[2]} />
        <DAOcards DAOcards={DAOcardsData[3]} />
      </div>
    </div>
  );
};

export default DAOdetails;
