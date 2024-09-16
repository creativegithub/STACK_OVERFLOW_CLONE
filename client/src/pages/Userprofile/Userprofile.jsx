import React, { useState } from "react";
import "./Userprofile.css";
import Leftsidebar from "../../Components/Leftsidebar/Leftsidebar";
import Avatar from "../../Components/Avatar/Avatar";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import Editprofileform from "./Editprofileform";
import Profilebio from "./Profilebio";
import moment from "moment";
import { useSelector } from "react-redux";

const Userprofile = ({ slidein }) => {
  const { id } = useParams();
  const [Switch, setSwitch] = useState(false);

  const users = useSelector((state) => state.usersReducer);

  const currentprofile = users.filter((user) => user._id === id)[0];

  const currentuser = useSelector((state) => state.currentuserReducer);

  // console.log("Current User ID:", currentuser._id);
  // console.log("Profile ID:", id);
  // console.log("Users:", users);
  // console.log("Current Profile:", currentprofile);
  // console.log("Current User:", currentuser);

  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein} />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar
                backgroundColor="purple"
                color="white"
                fontSize="50px"
                px="40px"
                py="30px"
              >
                {currentprofile.name.charAt(0).toUpperCase()}
              </Avatar>
              <div className="user-name">
                <h1>{currentprofile?.name}</h1>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                  {moment(currentprofile?.joinedon).fromNow()}
                </p>
              </div>
            </div>
            {currentuser?.result?._id === id && (
              <button
                className="edit-profile-btn"
                type="button"
                onClick={() => setSwitch(true)}
              >
                <FontAwesomeIcon icon={faPen} /> Edit Profile
              </button>
            )}
          </div>
          <>
            {Switch ? (
              <Editprofileform
                currentuser={currentuser}
                setSwitch={setSwitch}
              />
            ) : (
              <Profilebio currentprofile={currentprofile} />
            )}
          </>
        </section>
      </div>
    </div>
  );
};

export default Userprofile;
