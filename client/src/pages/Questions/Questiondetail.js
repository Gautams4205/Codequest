import React, { useState } from "react";
import moment from "moment";
import copy from "copy-to-clipboard";
import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";
import Avatar from "../../Component/Avatar/Avatar";
import Displayanswer from "./Displayanswer";
import { useDispatch, useSelector } from "react-redux";
import "./Question.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { deletequestion, votequestion, postanswer } from "../../action/question";

function Questiondetail() {
  const [answer, Setanswer] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const questionlist = useSelector((state) => state.questionreducer);
  const user = useSelector((state) => state.currentuserreducer);
  const navigate = useNavigate();
  const location = useLocation();
  const url = "http://localhost:3000";

  const handlepostans = (e, answerlength) => {
    e.preventDefault();
    if (user === null) {
      alert("Login or Signup to answer a question");
      navigate("/Auth");
    } else {
      if (answer === "") {
        alert("Enter an answer before submit");
      } else {
        dispatch(postanswer({ id, noofanswers: answerlength + 1, answerbody: answer, useranswered: user.result.name }));
        Setanswer("");
      }
    }
  };
  const handleupvote = () => {
    if (user === null) {
      alert("Login or Signup to answer a question");
      navigate("/Auth");
    } else {
      dispatch(votequestion(id, "upvote"));
    }
  };
  const handledownvote = () => {
    if (user === null) {
      alert("Login or Signup to answer a question");
      navigate("/Auth");
    } else {
      dispatch(votequestion(id, "downvote"));
    }
  };
  const handleshare = () => {
    copy(url + location.pathname);
    alert("Copied url :" + url + location.pathname);
  };
  const handleDelete = () => {
    dispatch(deletequestion(id, navigate));
  };

  return (
    <div className="question-details-page">
      {questionlist.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionlist.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questiontitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img src={upvote} alt="" width={18} className="votes-icon" onClick={handleupvote} />
                      <p>{question.upvote.length - question.downvote.length}</p>
                      <img src={downvote} alt="" width={18} className="votes-icon" onClick={handledownvote} />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionbody}</p>
                      <div className="question-details-tags">
                        {question.questiontags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button" onClick={handleshare}>
                            Share
                          </button>
                          {user?.result?._id === question?.userid && (
                            <button type="button" onClick={handleDelete}>
                              Delete
                            </button>
                          )}
                        </div>
                        <div>
                          <p>Asked {moment(question.askdown).fromNow()}</p>
                          <Link to={`Users/${question.userid}`} className="user-link" style={{ color: "#0086d8" }}>
                            <Avatar backgroundColor="orange" px="8px" py="5px" borderRadius="4px">
                              {question.userposted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userposted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noofanswer !== 0 && (
                  <section>
                    <h3>{question.noofanswer} Answer</h3>
                    <Displayanswer key={question._id} question={question} handleshare={handleshare}></Displayanswer>
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlepostans(e, question.answer.length);
                    }}>
                    <textarea name="" id="" cols="30" rows="10" value={answer} onChange={(e) => Setanswer(e.target.value)}></textarea>
                    <br />
                    <input type="submit" className="post-ans-btn" value="Post your answer " />
                    <p>
                      Browse other question tagged
                      {question.questiontags.map((tag) => (
                        <Link to="/tags" key={tag} className="ans-tag">
                          {" "}
                          {tag}{" "}
                        </Link>
                      ))}{" "}
                      or{" "}
                      <Link
                        to="/Askquestion"
                        style={{
                          textDecoration: "none",
                          color: "#009dff",
                        }}>
                        {" "}
                        Ask your own uestion
                      </Link>
                    </p>
                  </form>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default Questiondetail;
