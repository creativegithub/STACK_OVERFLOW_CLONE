import React from "react";
import User from "./User";
import { useSelector } from "react-redux";

const Userlist = () => {
  const users = useSelector((state) => state.usersReducer);

  // console.log("Users:", users);

  return (
    <div className="user-list-container">
      {users.map((user) => (
        <User user={user} key={user._id} />
      ))}
    </div>
  );
};

export default Userlist;
