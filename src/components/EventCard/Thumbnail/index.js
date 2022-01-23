import React from "react";
import Preview from "../Utils/Preview";
import Ratings from "../Utils/Rating";
import Tags from "../Utils/Tags";

const Thumbnail = ({ data, date }) => {
  return (
    <div className="thumbnail__container" data-date={date}>
      {data && <Ratings data={data} />}
      {data && <Preview data={data} />}
      {data && <Tags data={data} />}
    </div>
  );
};

export default Thumbnail;
