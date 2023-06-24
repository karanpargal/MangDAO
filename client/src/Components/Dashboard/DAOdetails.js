import React, { useEffect } from "react";
import Superteam from "../../Assests/Superteam.jpg";
import testDAO from "../../Assests/testDAO.jpg";
import DogeDAO from "../../Assests/DogeDAO.jpeg";
import DAOcards from "./DAOcards";
import Navbar from "../Navbar";
import axios from "axios";
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
      <div className="grid grid-cols-3 gap-4 mx-10 pt-20">
        {DAOcardsData.map((data) => {
          return <DAOcards DAOcards={data} />;
        })}
      </div>
    </div>
   
  );
};

export default DAOdetails;
