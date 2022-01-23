import React from "react";
import { months } from "../../Store/helper";
import Ratings from "../Utils/Rating";
import Tags from "../Utils/Tags";

const Expanded = ({ data }) => {
  const { calendardatetime, text, userid, media } = data;
  const date = calendardatetime.split("T").at().split("-")[2];
  const month = calendardatetime.split("T").at().split("-")[1];
  return (
    <>
      <div className="expanded__wrapper" id={userid}>
        <div className="expanded__cover">
          <img src={media?.at().mediaurl} alt="cover" />
        </div>
        <div className="expanded__header__label">
          <div className="rating__container">
            <Ratings data={data} />
          </div>
          <div className="tags__wrapper">
            <Tags data={data} />
          </div>
        </div>
        <div className="expanded__date">
          {months[+month - 1]} {date}
        </div>
        <div className="expanded__desc">{text}</div>
        <div className="expanded__footer">
          <div>View full Post</div>
        </div>
      </div>
    </>
  );
};

export default Expanded;
