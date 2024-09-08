import React, { useState } from "react";
import "./Askquestion.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {askquestion} from "../../action/question"

function Askquestion() {
  const [questiontitle, Setquestiontitle] = useState("");
  const [questionbody, Setquestionbody] = useState("");
  const [questiontags, Setquestiontags] = useState("");

  const handleenter = (e) => {
    if (e.code === "Enter") {
      Setquestionbody(questionbody + "\n");
    }
  };

  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentuserreducer);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (user) {
      if (questionbody && questiontitle && questiontags) {
        dispatch(askquestion({ questiontitle, questionbody, questiontags, userposted: user.result.name }, navigate));
        alert("You have successfully posted a question");
      } else {
        alert("Please enter all the feilds");
      }
    } else {
      alert("Login to ask question");
    }
  };
  const navigate = useNavigate();
  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a public question.</h1>
        <form onSubmit={handlesubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>Be specific and imagine you're asking a question to another person</p>
              <input
                type="text"
                id="ask-ques-title"
                onChange={(e) => {
                  Setquestiontitle(e.target.value);
                }}
                placeholder="e.g. Is there an R function for finding the indux of an element in a vector?"
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>Include all the information sometime would need to answer your question</p>
              <textarea
                name=""
                id="ask-ques-body"
                onChange={(e) => {
                  Setquestionbody(e.target.value);
                }}
                cols="30"
                rows="10"
                onKeyDown={handleenter}></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about </p>
              <input
                type="text"
                id="ask-ques-tags"
                onChange={(e) => {
                  Setquestiontags(e.target.value.split(" "));
                }}
                placeholder="e.g. (xml typescript wordpress) "
              />
            </label>
          </div>
          <input type="submit" value="Review your question" className="review-btn" />
        </form>
      </div>
    </div>
  );
}

export default Askquestion;
