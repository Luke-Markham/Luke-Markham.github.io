import React from "react";
import * as Scroll from "react-scroll";
import "./about-me.styles.scss";
import profilePic from "../../assets/general/profile-pic.jpg";
import Fade from "react-reveal";
const AboutMe = () => {
  const Element = Scroll.Element;
  return (
    <section className="about-me-container">
      <Element name="about-me">
        <Fade left>
          <img
            className="profile-pic"
            src={profilePic}
            alt="Luke Eliot Markham"
          />
        </Fade>
      </Element>
      <Fade>
        <p className="about-me-text">
          I'm passionate about creating responsive designs and providing
          engaging user experiences across platforms which build strong
          impressions and create lasting memories. I'm a Team Treehouse Tech
          degree graduate and life long learner who loves JavaScipt and breaths
          React.
        </p>
      </Fade>
    </section>
  );
};

export default AboutMe;
