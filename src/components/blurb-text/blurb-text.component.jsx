import React from "react";
import "./blurb-text.styles.scss";

const BlurbText = props => {
  return (
    <div className="blurb-container">
      <p className="blurb">{props.text}</p>
    </div>
  );
};

export default BlurbText;
