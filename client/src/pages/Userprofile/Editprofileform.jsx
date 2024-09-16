import React, { useState } from "react";
import "./Userprofile.css";
import { useDispatch } from "react-redux";
import { updateprofile } from "../../action/users";

const Editprofileform = ({ currentuser, setSwitch }) => {
  const [name, setName] = useState(currentuser?.result?.name || "");
  const [about, setAbout] = useState(currentuser?.result?.about || "");
  const [tags, setTags] = useState(currentuser?.result?.tags || []);
  const dispatch = useDispatch();

  // console.log("CURRENT USER:", currentuser);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tags[0] === "" || tags.length === 0) {
      alert("Please fill in all fields correctly.");
      return;
    } else {
      dispatch(updateprofile(currentuser?.result?._id, { name, about, tags }));
    }
    setSwitch(false);
  };

  return (
    <div>
      <h1 className="edit-profile-title">Edit Your Profile</h1>
      <h2 className="edit-profile-title-2">Public Information</h2>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <label htmlFor="Name">
          <h3>Display Name</h3>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="about">
          <h3>About Me</h3>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </label>
        <label htmlFor="tags">
          <h3>Watched tags</h3>
          <p>Add tags separated by 1 space</p>
          <input
            type="text"
            id="tags"
            value={tags.join(" ")}
            onChange={(e) => setTags(e.target.value.split(" "))}
          />
        </label>
        <br />
        <input type="submit" value="Save Profile" className="user-submit-btn" />
        <button
          type="button"
          className="user-cancel-btn"
          onClick={() => setSwitch(false)}
        >
          cancel
        </button>
      </form>
    </div>
  );
};

export default Editprofileform;
