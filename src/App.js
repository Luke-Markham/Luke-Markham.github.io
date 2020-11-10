import React from 'react';
import Preload from 'react-preload';
import { BreakpointProvider } from 'react-socks';
import './App.css';
import AppLoader from './components/app-loader/appLoader.component';
import Header from './components/header/header.component';
import Intro from './sections/intro/intro.component';
import TopBkgWrapper from './components/top-bkg-wrapper/top-bkg-wrapper.component';
import Work from './sections/work/work.component';
import Skills from './sections/skills/skills.component';
import AboutMe from './sections/about-me/about-me.component';
import Contact from './sections/contact/contact.component';
import Footer from './sections/footer/footer.component';

import headerImage from './assets/general/try0.jpeg';
import skillsImage from './assets/general/try1.jpeg';
import navImage from './assets/general/tokyo-2.jpg';
import profilePic from './assets/general/profile-pic2.jpg';

export function cacheImage(srcArray, setIsLoading) {
  srcArray.forEach((src) => {
    new Promise(function (resolve, reject) {
      const img = new Image();
      img.src = src;
      img.onload = resolve();
      img.onerror = reject();
    });
  });

  if (setIsLoading !== undefined) {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }
}

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const imgs = [headerImage, navImage, skillsImage, profilePic];
    cacheImage(imgs, setIsLoading);
  }, []);

  return (
    <BreakpointProvider>
      <div className="App">
        {isLoading ? (
          <AppLoader />
        ) : (
          <>
            <TopBkgWrapper>
              <Header />
              <Intro />
            </TopBkgWrapper>
            <Work />
            <Skills />
            <AboutMe />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </BreakpointProvider>
  );
}

export default App;
