import React, { useState } from "react";
import { ReactComponent as OpenNav } from "../../assets/general/openNav.svg";
import "./header.styles.scss";
import Nav from "../nav/nav.component";
import * as Scroll from "react-scroll";

const Header = () => {
  const [displayNav, openAndCloseNav] = useState(false);

  const handleNavToggle = () => {
    openAndCloseNav(!displayNav);
  };
  const Element = Scroll.Element;

  return (
    <Element name="top">
      <header className="header-container">
        <div className="header-bar">
          <div className="button-container">
            <div className="nav-toggle-open-button" onClick={handleNavToggle}>
              <OpenNav className="nav-toggle-image" />
            </div>
          </div>
        </div>

        <Nav displayNav={displayNav} toggle={handleNavToggle} />
      </header>
    </Element>
  );
};

export default Header;
