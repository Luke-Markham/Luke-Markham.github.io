import React from "react";
import Preload from "react-preload";
import { BreakpointProvider } from "react-socks";
import "./App.css";
import Header from "./components/header/header.component";
import Intro from "./sections/intro/intro.component";
import TopBkgWrapper from "./components/top-bkg-wrapper/top-bkg-wrapper.component";
import Work from "./sections/work/work.component";
import Skills from "./sections/skills/skills.component";
import AboutMe from "./sections/about-me/about-me.component";
import Contact from "./sections/contact/contact.component";
import Footer from "./sections/footer/footer.component";

import headerImage from "./assets/general/try0.jpeg";
import navImage from "./assets/general/tokyo-2.jpg";

function App() {
  var loadingIndicator = <div></div>;
  const images = [headerImage, navImage];
  return (
    <BreakpointProvider>
      <Preload
        loadingIndicator={loadingIndicator}
        images={images}
        autoResolveDelay={3000}
        resolveOnError={true}
        mountChildren={true}
      >
        <div className="App">
          <TopBkgWrapper>
            <Header />
            <Intro />
          </TopBkgWrapper>
          <Work />
          <Skills />
          <AboutMe />
          <Contact />
          <Footer />
        </div>
      </Preload>
    </BreakpointProvider>
  );
}

export default App;
