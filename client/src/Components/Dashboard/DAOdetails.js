import React, { useEffect } from "react";
import Superteam from "../../Assests/Superteam.jpg";
import testDAO from "../../Assests/testDAO.jpg";
import DogeDAO from "../../Assests/DogeDAO.jpeg";
import DAOcards from "./DAOcards";
import Navbar from "../Navbar";
import axios from "axios";


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
  const [DAOcardsData, setDAOcardsData] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:8000/getDAO");
      console.log(data);
      const DAOdata = data.data.map((DAO) => {
        let image = DogeDAO;
        if(DAO.data.name == "TestDAO"){
          image = testDAO;
        }
        return {
          Image: image,
          Heading: DAO.data.name,
          Description: DAO.data.description,
        };
      });
      setDAOcardsData(DAOdata);
      return DAOdata;
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />

      <h1 className="text-5xl font-bold text-left pl-14 pt-12">
        DAOs Available
      </h1>
      <p className="text-lg text-left pl-14 pt-2 font-medium text-gray-900">
        Click on "Enter" to checkout their bounties. You need to own their NFT to be able to enter.
      </p>
      <div className="grid grid-cols-3 gap-4 mx-10 ">
        {DAOcardsData.map((data) => {
          return <DAOcards DAOcards={data} />;
        })}
      </div>
    </div>
   
  );
};

export default DAOdetails;
