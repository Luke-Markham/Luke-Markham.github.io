import React from "react";
import "./intro.styles.scss";
import BlockText from "../../components/block-text/block-text.component";
import BlurbText from "../../components/blurb-text/blurb-text.component";

const Intro = () => {
  const text1 = "im luke";
  const text2 = "a front end developer";
  return (
    <section className="intro-container">
      <BlockText block="block-1" animate="letter-animate-1" text={text1} />
      <BlockText block="block-2" animate="letter-animate-2" text={text2} />
      <BlurbText text="Check out my work below." />{" "}
    </section>
  );
};

export default Intro;
