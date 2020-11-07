import React from "react";
import "./link-button.styles.scss";

const LinkBtn = props => {
  const { text, Href } = props;
  return (
    <a
      className="link-btn"
      href={Href}
      target="_blank"
      rel="noreferrer noopener"
    >
      {text}
    </a>
  );
};

export default LinkBtn;
