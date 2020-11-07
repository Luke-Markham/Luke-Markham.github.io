import React from "react";
import "./footer.styles.scss";
import * as Scroll from "react-scroll";
import Bounce from "react-reveal";

const Footer = () => {
  const Link = Scroll.Link;
  return (
    <footer>
      <Bounce left>
        <span>LEM 2019 &copy;</span>
      </Bounce>
      <Bounce right>
        <Link
          to="top"
          spy={true}
          smooth={true}
          duration={1500}
          className="back-to-top-link"
        >
          Back To Top
        </Link>
      </Bounce>
    </footer>
  );
};

export default Footer;
