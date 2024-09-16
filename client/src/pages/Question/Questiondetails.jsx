import React, { useState } from "react";
import "./Question.css";
import moment from "moment";
import copy from "copy-to-clipboard";
import Upvote from "../../assets/sort-up.svg";
import Downvote from "../../assets/sort-down.svg";
import Avatar from "../../Components/Avatar/Avatar";
import Displayanswer from "./Displayanswer";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deletequestion,
  postanswer,
  votequestion,
} from "../../action/question";

const Questiondetails = () => {
  const [answer, setAnswer] = useState("");
  const user = useSelector((state) => state.currentuserReducer);
  const questionlist = useSelector((state) => state.questionReducer);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const url = "http://localhost:3000";

  const handlePostans = (e, answerlength) => {
    e.preventDefault();

    if (user === null) {
      alert("Login or Signup to answer a question");
      navigate("/Auth");
    } else {
      if (answer === "") {
        alert("Enter an answer before submitting");
      } else {
        dispatch(
          postanswer({
            id,
            noofanswers: answerlength + 1,
            answerbody: answer,
            useranswered: user.result.name,
          })
        );
        setAnswer("");
      }
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied url :" + url + location.pathname);
  };

  const handleDelete = () => {
    dispatch(deletequestion(id, navigate));
  };

  const handleUpvote = () => {
    if (user === null) {
      alert("Login or Signup to answer a question");
      navigate("/Auth");
    } else {
      dispatch(votequestion(id, "upvote"));
    }
  };
  const handleDownvote = () => {
    if (user === null) {
      alert("Login or Signup to answer a question");
      navigate("/Auth");
    } else {
      dispatch(votequestion(id, "downvote"));
    }
  };

  return (
    <div className="question-details-page">
      {questionlist.data === null ? (
        Avatar(<h1>Loading...</h1>)
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
                      <img
                        src={Upvote}
                        alt="Upvote"
                        width={18}
                        className="votes-icon"
                        onClick={handleUpvote}
                      />
                      <p>{question.upvote.length - question.downvote.length}</p>
                      <img
                        src={Downvote}
                        alt="Downvote"
                        width={18}
                        className="votes-icon"
                        onClick={handleDownvote}
                      />
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
                          <button type="button" onClick={handleShare}>
                            Share
                          </button>
                          {user?.result?._id === question?.userid && (
                            <button type="button" onClick={handleDelete}>
                              Delete
                            </button>
                          )}
                        </div>
                        <div>
                          <p>Asked {moment(question.askedon).fromNow()}</p>
                          <Link
                            to={`/Users/${question.userid}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar
                              backgroundColor="orange"
                              px="8px"
                              py="5px"
                              borderRadius="4px"
                            >
                              {question.userposted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userposted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noofanswers !== 0 && (
                  <section>
                    <h3>{question.noofanswers} Answers</h3>
                    <Displayanswer
                      key={question._id}
                      question={question}
                      handleShare={handleShare}
                    />
                  </section>
                )}

                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePostans(e, question.answer.length);
                    }}
                  >
                    <textarea
                      name=""
                      id="Question-Answer"
                      cols="30"
                      rows="10"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      name="Submit"
                      id="Submit"
                      value="Post your Answer"
                    />
                  </form>
                  <p>
                    Browse other Question tagged
                    {question.questiontags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tag">
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}{" "}
                    or
                    <Link
                      to="/Askquestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      {" "}
                      Ask your own question
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Questiondetails;
