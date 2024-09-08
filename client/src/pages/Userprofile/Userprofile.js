import React, { useState } from "react";
import Leftsidebar from "../../Component/LeftSideBar/Leftsidebar";
import { useParams } from "react-router-dom";
import moment from "moment";
import "./Userprofile.css";
import Avatar from "../../Component/Avatar/Avatar";
import Editprofileform from "./Editprofileform";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import Profilebio from "./Profilebio";
import { useSelector } from "react-redux";

function Userprofile({ slidein }) {
  const { id } = useParams();
  const [Switch, Setswitch] = useState(false);
  const users = useSelector((state) => state.usersreducer);
  const currentprofile = users.filter((user) => user._id === id)[0];
  const currentuser = useSelector((state) => state.currentuserreducer);
  
  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein} />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar backgroundColor="purple" px="40px" color="white" fontSize="50px" py="30px">
                {currentprofile?.name.charAt(0).toUpperCase()}
              </Avatar>
              <div className="user-name">
                <h1>{currentprofile?.name}</h1>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} />
                  Joined {moment(currentprofile?.joinedon).fromNow()}
                </p>
              </div>
            </div>
            {currentuser?.result?._id === id && (
              <button className="edit-profile-btn" type="button" onClick={() => Setswitch(true)}>
                <FontAwesomeIcon icon={faPen} /> Edit Profile
              </button>
            )}
          </div>
          <>
            {Switch ? <Editprofileform currentuser={currentuser} Setswitch={Setswitch} /> : <Profilebio currentprofile={currentprofile} />}
          </>
        </section>
      </div>
    </div>
  );
}

export default Userprofile;
