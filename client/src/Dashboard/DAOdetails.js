import React from "react";
import Superteam from "../Assests/Superteam.jpg";
import DAOcards from "./DAOcards";

const DAOdetails = () => {
  const DAOcardsData = [
    {
      Image: "https://www.google.com/search?sxsrf=APwXEddBXl5owylZlc0z20u0_LHiWwdtdQ:1687544568841&q=superteam&tbm=isch&sa=X&ved=2ahUKEwjK3MW0gdr_AhWbd2wGHZppA0IQ0pQJegQIDRAB&biw=1536&bih=714&dpr=1.25#imgrc=2dnlMmnQwGuUUM",
      Heading: "Superteam",
      Description: "Lorem ipsum matilda elit da capsus whateva list gdreol ",
      Button: "Join",
    },
    {
      Image: "https://www.google.com/search?sxsrf=APwXEddBXl5owylZlc0z20u0_LHiWwdtdQ:1687544568841&q=superteam&tbm=isch&sa=X&ved=2ahUKEwjK3MW0gdr_AhWbd2wGHZppA0IQ0pQJegQIDRAB&biw=1536&bih=714&dpr=1.25#imgrc=2dnlMmnQwGuUUM",
      Heading: "Superteam",
      Description: "Lorem ipsum matilda elit da capsus whateva list gdreol ",
      Button: "Join",
    },

    {
      Image: "https://www.google.com/search?sxsrf=APwXEddBXl5owylZlc0z20u0_LHiWwdtdQ:1687544568841&q=superteam&tbm=isch&sa=X&ved=2ahUKEwjK3MW0gdr_AhWbd2wGHZppA0IQ0pQJegQIDRAB&biw=1536&bih=714&dpr=1.25#imgrc=2dnlMmnQwGuUUM",
      Heading: "Superteam",
      Description: "Lorem ipsum matilda elit da capsus whateva list gdreol ",
      Button: "Join",
    },

    {
      Image: "https://www.google.com/search?sxsrf=APwXEddBXl5owylZlc0z20u0_LHiWwdtdQ:1687544568841&q=superteam&tbm=isch&sa=X&ved=2ahUKEwjK3MW0gdr_AhWbd2wGHZppA0IQ0pQJegQIDRAB&biw=1536&bih=714&dpr=1.25#imgrc=2dnlMmnQwGuUUM",
      Heading: "Superteam",
      Description: "Lorem ipsum matilda elit da capsus whateva list gdreol ",
      Button: "Join",
    },

    {
      Image: { Superteam },
      Heading: "Superteam",
      Description: "Lorem ipsum matilda elit da capsus whateva list gdreol ",
      Button: "Join",
    },
  ];
  console.log(DAOcardsData);
  return (
    <div id="ListDetails">
      <div className="">
        <DAOcards ListCards={DAOcardsData[0]} />
        <DAOcards ListCards={DAOcardsData[1]} />
        <DAOcards ListCards={DAOcardsData[2]} />
        <DAOcards ListCards={DAOcardsData[3]} />
      </div>
    </div>
  );
};

export default DAOdetails;
