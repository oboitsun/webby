import React from "react";

function Review({ review }) {
  return (
    <div className="Reviews__review">
      <div className="avatar">
        <img className="" src={review.iconSrc} alt={review.name} />
      </div>
      <div className="flex flex-col">
        <p className="author-name">{review.name}</p>
        <p className="author-review">{review.review}</p>
      </div>
    </div>
  );
}

export default Review;
