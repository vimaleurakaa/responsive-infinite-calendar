import React from "react";
import { AiFillStar } from "react-icons/ai";
import { v4 as uuid } from "uuid";

const Ratings = ({ data }) => {
  const rating = data.rating;
  console.log();
  return (
    <div className="ratings__container">
      {Array(5)
        .fill(null)
        .map((_, i) => {
          const id = uuid();
          return (
            <React.Fragment key={id}>
              {i < rating ? (
                <AiFillStar className="ratings rating__active" />
              ) : (
                <AiFillStar className="ratings rating__grey" />
              )}
            </React.Fragment>
          );
        })}
    </div>
  );
};
export default Ratings;
