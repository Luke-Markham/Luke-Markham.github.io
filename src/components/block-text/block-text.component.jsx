import React from "react";
import "./block-text.styles.scss";

const BlockText = props => {
  return (
    <div className={`block-text-container + ${props.block}`}>
      <p className="blockbuster-text">
        {Array.from(props.text).map((letter, key) => (
          <span key={key} className={`blockbuster-text + ${props.animate}`}>
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
};

export default BlockText;
