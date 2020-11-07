import React from "react";
import { Fade, Bounce } from "react-reveal";
import * as Scroll from "react-scroll";
import LazyLoad from "react-lazyload";
import "./contact.styles.scss";
import { ReactComponent as LinkedIn } from "../../assets/general/linkedin.svg";
import { ReactComponent as Github } from "../../assets/general/github.svg";
import ContactForm from "../../components/contact-form/contact-form.component";
import BlurbText from "../../components/blurb-text/blurb-text.component";

const Contact = () => {
  const Element = Scroll.Element;
  return (
    <section className="contact-container">
      <Element name="contact">
        <div className="contact-intro-text">
          <LazyLoad offset={50} once>
            <Fade>
              <BlurbText text="Hey, give me a buzz! let's work together." />
            </Fade>
          </LazyLoad>
        </div>
      </Element>
      <div className="external-profile-link-container">
        <Bounce top>
          <a
            href="https://linkedin.com/in/luke-eliot-markham"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className="external-profile-link-icon" />
          </a>
        </Bounce>
        <Bounce bottom>
          <a
            href="https://github.com/Luke-Markham/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="external-profile-link-icon" />
          </a>
        </Bounce>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
