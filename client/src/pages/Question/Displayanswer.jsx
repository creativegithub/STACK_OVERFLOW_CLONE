import moment from "moment";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Avatar from "../../Components/Avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { deleteanswer } from "../../action/question";

const Displayanswer = ({ question, handleShare }) => {
  const user = useSelector((state) => state.currentuserReducer);
  const { id } = useParams();
  const dispatch = useDispatch();

  // console.log("Question answer:", question);

  // Handling case where question or answers might be undefined
  if (!question || !Array.isArray(question.answer)) {
    return <p>No answers available.</p>;
  }

  const handleDelete = (answerid, noofanswers) => {
    dispatch(deleteanswer(id, answerid, noofanswers - 1));
  };

  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerbody}</p>
          <div className="question-actions-user">
            <div>
              <button type="button" onClick={handleShare}>
                Share
              </button>
              {user?.result?._id === ans?.userid && (
                <button
                  type="button"
                  onClick={() => handleDelete(ans._id, question.noofanswers)}
                >
                  Delete
                </button>
              )}
            </div>
            <div>
              <p>answered {moment(ans.answeredon).fromNow()}</p>
              <Link
                to={`/Users/${ans.userid}`}
                className="user-link"
                style={{ color: "#0086d8" }}
              >
                <Avatar
                  backgroundColor="lightgreen"
                  px="8px"
                  py="5px"
                  borderRadius="4px"
                >
                  {ans.useranswered.charAt(0).toUpperCase()}
                </Avatar>
                <div>{ans.useranswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Displayanswer;
