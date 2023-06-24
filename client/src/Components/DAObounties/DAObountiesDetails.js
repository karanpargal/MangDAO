import React from "react";
import DAObountiesCards from "./DAObountiesCards";
import Earth from "../../Assests/Earth.jpg";

const DAObountiesDetails = () => {
  const DAObountiesCardsData = [
    {
      Image: Earth,
      Heading: "Bounty Heading",
      Description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit Exceptu provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem ",
      Time: "24 Days",
      Rewards:"400",
    },
    {
      Image: Earth,
      Heading: "Bounty Heading",
      Description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exceptur provident iure placeat blanditiis ea sint earum hic iste quibusdamexercitationem.",
      Time: "24 Days",
      Rewards:"240"
    },
    {
      Image: Earth,
      Heading: "Bounty Heading",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exceptur provident iure placeat blanditiis ea sint earum hic iste quibusdamexercitatione",
      Time: "24 Days",
      Rewards:"400"
    },
  ];

  console.log(DAObountiesCardsData);

  return (
    <div className=" font-display" id="DAObountiesDetails">
      <div className=" justify-center gap-y-16 p-8 pt-2  ">
        <DAObountiesCards DAObountiesCards={DAObountiesCardsData[0]} />
        <DAObountiesCards DAObountiesCards={DAObountiesCardsData[1]} />
        <DAObountiesCards DAObountiesCards={DAObountiesCardsData[2]} />
      </div>
    </div>
  );
};

export default DAObountiesDetails;
