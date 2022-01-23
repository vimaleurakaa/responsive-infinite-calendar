import React from "react";
import { typeOfDay } from "../../Store/helper";

const Tags = ({ data }) => {
  const __tags = data.typeofday;
  return (
    <div className="tags__container">
      {__tags?.map((it) => {
        const [value, color] = typeOfDay[it];
        return (
          <span key={it} {...(color && { className: color })}>
            {value}
          </span>
        );
      })}
    </div>
  );
};
export default Tags;
