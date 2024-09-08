import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Askquestion from "./pages/AskQuestion/Askquestion";
import Auth from "./pages/Auth/Auth";
import Question from "./pages/Questions/Question";
import Displayquestion from "./pages/Questions/Displayquestion";
import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
import Userprofile from "./pages/Userprofile/Userprofile";

function Allroutes({ slidein, handleslidein }) {
  return (
    <Routes>
      <Route path="/" element={<Home slidein={slidein} handleslidein={handleslidein} />}></Route>
      <Route path="/Askquestion" element={<Askquestion />}></Route>
      <Route path="/Auth" element={<Auth />}></Route>
      <Route path="/Question" element={<Question slidein={slidein} handleslidein={handleslidein} />}></Route>
      <Route path="/Tags" element={<Tags slidein={slidein} handleslidein={handleslidein} />}></Route>
      <Route path="/Users" element={<Users slidein={slidein} handleslidein={handleslidein} />}></Route>
      <Route path="/Users/:id" element={<Userprofile slidein={slidein} handleslidein={handleslidein} />} />
      <Route path="/Question/:id" element={<Displayquestion slidein={slidein} handleslidein={handleslidein} />}></Route>
    </Routes>
  );
}

export default Allroutes;
