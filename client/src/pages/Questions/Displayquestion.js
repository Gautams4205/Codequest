import React from "react";
import Leftsidebar from "../../Component/LeftSideBar/Leftsidebar";
import Rightsidebar from "../../Component/RightSideBar/Rightsidebar";
import Questiondetail from "./Questiondetail";

function Displayquestion({ slidein }) {
  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein}></Leftsidebar>
      <div className="home-container-2">
        <Questiondetail />
        <Rightsidebar></Rightsidebar>
      </div>
    </div>
  );
}

export default Displayquestion;
