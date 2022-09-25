import React from "react";

import "./Feature.scss";

const Feature = ({ number, title, content }) => {
  return (
    <div className="app__feature">
      <span>{number}</span>
      <h3 className="title">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Feature;
