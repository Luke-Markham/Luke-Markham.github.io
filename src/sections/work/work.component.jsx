import React from "react";
import Fade from "react-reveal/Fade";
import * as Scroll from "react-scroll";
import portfolioInfo from "../../assets/general/portfolio.item.info";
import "./work.styles.scss";
import PortfolioItem from "../../components/portfolio-item/portfolio-item.component";
import eCommerceStoreImage from "../../assets/portfolio-items/e-com-store-preview.png";
import managementAppImage from "../../assets/portfolio-items/mangagement-app-preview.png";
import rsvpAppImage from "../../assets/portfolio-items/rsvpApp-preview.png";
import employeeDirectoryImage from "../../assets/portfolio-items/employeeDirectory-preview.png";
import styleGuideImage from "../../assets/portfolio-items/styleGuide-preview.png";
import javaScriptGameImage from "../../assets/portfolio-items/javaScriptGame-preview.png";
import luxuryRentalsImage from "../../assets/portfolio-items/luxuryRentals-preview.png";
const Work = () => {
  const {
    eComStore,
    managementApp,
    rsvpApp,
    employeeDirectory,
    styleGuide,
    luxuryRentals
  } = portfolioInfo;

  const Element = Scroll.Element;

  return (
    <section className="work-container">
      <div className="portfolio-items-container">
        <Element name="work">
          <Fade left>
            <PortfolioItem
              itemName="luxury rentals"
              src={luxuryRentalsImage}
              description={luxuryRentals.description}
              liveViewHref={luxuryRentals.liveViewHref}
              githubHref={luxuryRentals.githubHref}
            />
          </Fade>
        </Element>
        <Fade right>
          <PortfolioItem
            itemName="e commerce store"
            src={eCommerceStoreImage}
            description={eComStore.description}
            liveViewHref={eComStore.liveViewHref}
            githubHref={eComStore.githubHref}
          />
        </Fade>
        <Fade left>
          <PortfolioItem
            itemName="management app"
            src={managementAppImage}
            description={managementApp.description}
            liveViewHref={managementApp.liveViewHref}
            githubHref={managementApp.githubHref}
          />
        </Fade>
        <Fade right>
          <PortfolioItem
            itemName="rsvp app"
            src={rsvpAppImage}
            description={rsvpApp.description}
            liveViewHref={rsvpApp.liveViewHref}
            githubHref={rsvpApp.githubHref}
          />
        </Fade>{" "}
        <Fade right>
          <PortfolioItem
            itemName="style guide"
            src={styleGuideImage}
            description={styleGuide.description}
            liveViewHref={styleGuide.liveViewHref}
            githubHref={styleGuide.githubHref}
          />
        </Fade>
        <Fade left>
          <PortfolioItem
            itemName="employee directory"
            src={employeeDirectoryImage}
            description={employeeDirectory.description}
            liveViewHref={employeeDirectory.liveViewHref}
            githubHref={employeeDirectory.githubHref}
          />
        </Fade>
      </div>
    </section>
  );
};

export default Work;
