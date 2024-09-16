import React from "react";
import Question from "./Question";

const Questionlist = ({ questionlist }) => {

  // console.log("questionlist:", questionlist);

  return (
    <>
      {questionlist.map((question) => (
        <Question question={question} key={question._id} />
      ))}
    </>
  );
};

export default Questionlist;
