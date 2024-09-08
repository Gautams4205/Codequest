import React, { useState } from "react";
import "./Userprofile.css";
import { useDispatch } from "react-redux";
import { updateprofile } from "../../action/users.js";

function Editprofileform({ currentuser, Setswitch }) {
  const [name, setname] = useState(currentuser?.result?.name);
  const [about, setabout] = useState(currentuser?.result?.about);
  const [tags, settags] = useState([]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((tags[0] === "" || tags.length === 0)) {
      alert("Update tags feild");
    } else {
      dispatch(updateprofile(currentuser?.result?._id, { name, about, tags }));
    }
    Setswitch(false);
  };
  return (
    <div>
      <h1 className="edit-profile-title">Edit your Profile.</h1>
      <h2 className="edit-profile-title-2">Public Information</h2>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <h3>Display Name</h3>
          <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
        </label>
        <label htmlFor="about">
          <h3>About Me</h3>
          <textarea name="" id="about" cols="30" rows="10" value={about} onChange={(e) => setabout(e.target.value)}></textarea>
        </label>
        <label htmlFor="tags">
          <h3>Watched tags</h3>
          <p>Add tags seprated by 1</p>
          <input type="text" id="tags" onChange={(e) => settags(e.target.value.split(" "))} />
        </label>
        <br />
        <input type="submit" value="save profile" className="user-submit-btn" />
        <button type="button" className="user-cancel-btn" onClick={() => Setswitch(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Editprofileform;
