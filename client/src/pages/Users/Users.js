import React from "react";
import Leftsidebar from "../../Component/LeftSideBar/Leftsidebar";
import "./Users.css";
import Userslist from "./Userslist";

function Users({ slidein }) {
  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein}></Leftsidebar>
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        <Userslist />
      </div>
    </div>
  );
}

export default Users;
