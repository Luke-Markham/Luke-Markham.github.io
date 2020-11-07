import React, { useState } from "react";
import { animated, useTransition } from "react-spring";
import LinkBtn from "../link-button/link-button.component";
import "./portfolio-item.styles.scss";

const PortfolioItem = props => {
  const { itemName, src, description, liveViewHref, githubHref } = props;
  const [openOverlay, setOverlayOpen] = useState(false);
  const slideDown = useTransition(openOverlay, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const handleItemToggle = () => {
    setOverlayOpen(!openOverlay);
  };

  return (
    <div className="portfolio-item" onClick={handleItemToggle}>
      {slideDown.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <div className="description-overlay-container">
                <h2>{itemName}</h2>
                <button className="close-btn" onClick={handleItemToggle}>
                  &#x2715;
                </button>
                <div className="description-list-container">
                  <ul className="portfolio-description-list">
                    {description.map((text, index) => (
                      <li key={index}>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="external-link-button-container">
                  <LinkBtn Href={liveViewHref} text="Live View" />
                  <LinkBtn Href={githubHref} text="Github Repo" />
                </div>
              </div>
            </animated.div>
          )
      )}

      <img className="portfolio-item-image" src={src} alt="portfolio-item" />
    </div>
  );
};

export default PortfolioItem;
