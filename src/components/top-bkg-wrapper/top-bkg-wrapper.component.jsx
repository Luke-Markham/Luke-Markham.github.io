import React from "react";
import "./top-bkg-wrapper.styles.scss";

const TopBkgWrapper = props => {
  return <div className="top-bkg-wrapper-container">{props.children}</div>;
};

export default TopBkgWrapper;
