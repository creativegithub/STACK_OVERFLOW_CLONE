import React from "react";

const Profilebio = ({ currentprofile }) => {

  // console.log("Current Profile: ", currentprofile);

  return (
    <div>
      <div>
        {currentprofile?.tags.length !== 0 ? (
          <>
            <h4>Tags Watched</h4>
            {currentprofile?.tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </>
        ) : (
          <p>0 Tags Watched</p>
        )}
      </div>
      <div>
        {currentprofile?.about ? (
          <>
            <h4>About</h4>
            <p>{currentprofile?.about}</p>
          </>
        ) : (
          <p>No Bio Found</p>
        )}
      </div>
    </div>
  );
};

export default Profilebio;
