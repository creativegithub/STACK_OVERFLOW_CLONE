import React from "react";
import "../../App.css";
import Leftsidebar from "../../Components/Leftsidebar/Leftsidebar";
import Homemainbar from "../../Components/Homemainbar/Homemainbar";
import Rightsidebar from "../../Components/Rightsidebar/Rightsidebar";

const Question = ({ slidein }) => {
  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein} />
      <div className="home-container-2">
        <Homemainbar />
        <Rightsidebar />
      </div>
    </div>
  );
};

export default Question;
