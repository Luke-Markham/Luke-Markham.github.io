import React from "react";
import "./nav.styles.scss";
import { animated, useTransition } from "react-spring";
import * as Scroll from "react-scroll";
import { ReactComponent as CloseNav } from "../../assets/general/closeNav.svg";

const Nav = properties => {
  const { displayNav, toggle } = properties;
  const slideDown = useTransition(displayNav, null, {
    from: { transform: "translateX(+100%)", transformStyle: "translateZ(1)" },
    enter: { transform: "translateX(0%)", transformStyle: "translateZ(1)" },
    leave: { transform: "translateX(+100%)", transformStyle: "translateZ(1)" }
  });

  const Link = Scroll.Link;

  return slideDown.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          <nav className="rain">
            <button
              className="nav-toggle-close-button"
              type="button"
              onClick={toggle}
            >
              <CloseNav className="nav-toggle-image" />
            </button>
            <div className="nav-links-container">
              <Link
                to="work"
                spy={true}
                smooth={true}
                duration={1500}
                offset={-50}
                className="nav-link-item"
                onClick={toggle}
              >
                work
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={2000}
                offset={0}
                className="nav-link-item"
                onClick={toggle}
              >
                skills
              </Link>
              <Link
                to="about-me"
                spy={true}
                smooth={true}
                duration={2000}
                offset={0}
                className="nav-link-item"
                onClick={toggle}
              >
                about me
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={2000}
                offset={0}
                className="nav-link-item"
                onClick={toggle}
              >
                contact
              </Link>
            </div>
          </nav>
        </animated.div>
      )
  );
};

export default Nav;
