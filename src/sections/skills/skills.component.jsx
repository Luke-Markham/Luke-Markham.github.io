import React from "react";
import { Bounce, Fade } from "react-reveal";
import * as Scroll from "react-scroll";
import LazyLoad from "react-lazyload";
import "./skills.styles.scss";
import { ReactComponent as HTMLIcon } from "../../assets/skills/html5.svg";
import { ReactComponent as CSSIcon } from "../../assets/skills/css3.svg";
import { ReactComponent as JSIcon } from "../../assets/skills/javascript.svg";
import { ReactComponent as ReactIcon } from "../../assets/skills/react.svg";
import { ReactComponent as ReduxIcon } from "../../assets/skills/redux.svg";
import { ReactComponent as SassIcon } from "../../assets/skills/sass.svg";
import { ReactComponent as BootstrapIcon } from "../../assets/skills/bootstrap.svg";
import { ReactComponent as GraphQLIcon } from "../../assets/skills/graphql.svg";
import { ReactComponent as FirebaseIcon } from "../../assets/skills/firebase.svg";
import { ReactComponent as JestIcon } from "../../assets/skills/jest.svg";
import BlurbText from "../../components/blurb-text/blurb-text.component";

const Skills = () => {
  const skillsCol1Array = [
    <HTMLIcon className="icon" name="HTML5" />,
    <CSSIcon className="icon" name="CSS3" />,
    <JSIcon className="icon" name="JavaScript" />,
    <ReactIcon className="icon" name="React" />,
    <ReduxIcon className="icon" name="Redux" />
  ];

  const skillsCol2Array = [
    <SassIcon className="icon" name="Sass" />,
    <BootstrapIcon className="icon" name="Bootstrap" />,
    <GraphQLIcon className="icon" name="GraphQL" />,
    <FirebaseIcon className="icon" name="Firebase" />,
    <JestIcon className="icon" name="Jest" />
  ];

  const Element = Scroll.Element;

  return (
    <Fade>
      <section className="skills-container">
        <Element name="skills">
          <div className="skills-intro-text">
            <LazyLoad offset={50} once>
              <Fade>
                <BlurbText text="Check out some of the technologies I use." />
              </Fade>
            </LazyLoad>
          </div>
        </Element>
        <div className="skills-cols-container">
          <div className="col-1">
            {skillsCol1Array.map((skill, index) => {
              return (
                <div key={index} className="skill-item-container">
                  <Bounce duration={1500} bottom>
                    {skill}
                  </Bounce>
                  <Fade duration={2250}>
                    <span>{skill.props.name}</span>
                  </Fade>
                </div>
              );
            })}
          </div>
          <div className="col-2">
            {skillsCol2Array.map((skill, index) => {
              return (
                <div key={index} className="skill-item-container">
                  <Bounce duration={1500} bottom>
                    {skill}
                  </Bounce>
                  <Fade duration={2250}>
                    <span>{skill.props.name}</span>
                  </Fade>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Skills;
