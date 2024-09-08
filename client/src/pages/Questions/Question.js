import React from 'react'
import Leftsidebar from "../../Component/LeftSideBar/Leftsidebar";
import Rightsidebar from "../../Component/RightSideBar/Rightsidebar";
import Homemainbar from "../../Component/Homemainbar/Homemainbar";

function Question({slidein}) {
  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein}></Leftsidebar>
      <div className="home-container-2">
        <Homemainbar></Homemainbar>
        <Rightsidebar></Rightsidebar>
      </div>
    </div>
  );
}

export default Question
