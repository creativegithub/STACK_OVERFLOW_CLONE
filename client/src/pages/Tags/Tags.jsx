import React from "react";
import "./Tags.css";
import Leftsidebar from "../../Components/Leftsidebar/Leftsidebar";
import { TagsList } from "./Tagslist";
import Taglist from "./Taglist";

const Tags = ({ slidein }) => {
  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein} />
      <div className="home-container-2">
        <h1 className="tags-h1">Tags</h1>
        <p className="tags-p">
          A tag is a keyword oe label that categorizes your with other similar
          question.
        </p>
        <p className="tags-p">
          Using the right tags makes it easier for others to find and answer
          your question
        </p>
        <div className="tags-list-container">
          {TagsList.map((tag, index) => (
            <Taglist tag={tag} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
