import React from "react";
import User from "./User";
import {useSelector} from "react-redux";

function Userslist() {
  const users = useSelector((state) => state.usersreducer);
  return (
    <div className="user-list-container">
      {users.map((user) => (
        <User user={user} key={user?._id} />
      ))}
    </div>
  );
}

export default Userslist;
