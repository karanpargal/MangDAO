import React from "react";
import DAObountiesCards from "./DAObountiesCards";
import Earth from "../../Assests/Earth.jpg";

const DAObountiesDetails = (props) => {

  console.log(props.bountyData);

  return (
    <div className=" font-display" id="DAObountiesDetails">
      <div className=" justify-center gap-y-16 p-8 pt-2  ">
        {
          props.bountyData.map((data) => {
            return (
              <DAObountiesCards
                Image={Earth}
                Heading={data.data.title}
                Description={data.data.details}
                Time={data.data.deadline}
                Rewards={data.data.prize}
                Button="Submit"
              />
            );
          }
          )
        }
      </div>
    </div>
  );
};

export default DAObountiesDetails;
