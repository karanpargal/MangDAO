import React, { useEffect } from "react";
import Superteam from "../../Assests/Superteam.jpg";
import DAOcards from "./DAOcards";
import Navbar from "../Navbar";
import axios from "axios";

const DAOdetails = () => {
  const [DAOcardsData, setDAOcardsData] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:8000/getDAO");
      console.log(data);
      const DAOdata = data.data.map((DAO) => {
        return {
          Image: Superteam,
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
