import React from "react";
import "./Leftsidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";

const Leftsidebar = ({ slidein }) => {
  const slideinStyle = {
    transform: "translateX(0%)",
  };
  const slideoutStyle = {
    transform: "translateX(-100%)",
  };
  return (
    <div
      className="left-sidebar"
      style={slidein ? slideinStyle : slideoutStyle}
    >
      <nav className="side-nav">
        <button className="leftside-btn">
          <NavLink to="/" className="side-nav-links" activeclassname="active">
            <p>Home</p>
          </NavLink>
        </button>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <button className="leftside-btn">
            <NavLink
              to="/Questions"
              className="side-nav-links"
              activeclassname="active"
            >
              <img src={Globe} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}>Questions</p>
            </NavLink>
          </button>
          <button className="leftside-btn">
            <NavLink
              to="/Tags"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Tags</p>
            </NavLink>
          </button>
          <button className="leftside-btn">
            <NavLink
              to="/Users"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Users</p>
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Leftsidebar;
