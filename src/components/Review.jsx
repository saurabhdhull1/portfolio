import React from "react";

const Review = ({ name, email, message, ref, review }) => {
  console.log(ref)

  return (
    <div>
      <h2 className="text-md ml-2 mt-3 mb-4 text-neutral-400 dropshadow">
        Reviews
      </h2>
      <div className="review">
        <div className="review-div">
          <h3>{name}Sorry! we are working On this</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
  
};

export default Review;
