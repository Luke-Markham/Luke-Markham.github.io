import React, { useEffect } from 'react';
import Fade from 'react-reveal';
import './appLoader.styles.scss';

const AppLoader = () => {
  useEffect(() => {
    let tID;
    let position = 44;
    const interval = 100;
    tID = setInterval(() => {
      document.getElementById(
        'loading'
      ).style.backgroundPosition = `-${position}px 0px`;

      if (position < 300) {
        position += position;
      } else {
        position = 44;
      }
    }, interval);

    return () => {
      clearInterval(tID);
    };
  });
  return (
    <div className="app-loader-container">
      <div className="loading-container">
        <Fade>
          <div id="loading" />
        </Fade>
      </div>
    </div>
  );
};

export default AppLoader;
