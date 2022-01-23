import React from "react";

const Preview = ({ data }) => {
  const imagePath = data.media.at().mediaurl;
  return (
    <div className="preview__image">
      <img src={imagePath} alt="preview" />
    </div>
  );
};
export default Preview;
