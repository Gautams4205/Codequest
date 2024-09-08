import React from "react";
import Questions from "./Questions";

function Questionlist({ questionlist }) {
  return (
    <div>
      {questionlist.map((question) => (
        <Questions question={question} key={question._id}/>
      ))}
    </div>
  );
}

export default Questionlist;
