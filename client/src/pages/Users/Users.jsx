import React from "react";
import "./Users.css";
import Leftsidebar from "../../Components/Leftsidebar/Leftsidebar";
import Userlist from "./Userlist";

const Users = ({ slidein }) => {
  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein} />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        <Userlist />
      </div>
    </div>
  );
};

export default Users;
