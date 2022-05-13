import React, { useEffect, useState } from "react";
import "./styles/main.scss";

import ThemeProvider from "./components/Contexts/ThemeProvider";
import useDeviceDetect from "./components/useDeviceDetect";
import Navbar from "./components/navbar/Navbar";
import Scroller from "./components/layout/Scroller";
import Home from "./components/layout/Home";
import AboutMe from "./components/layout/AboutMe";
import Projects from "./components/layout/Projects";
import Skills from "./components/layout/Skills";
import Contact from "./components/layout/Contact";

function App() {
  const [scrollbar, setScrollbar] = useState(null);
  const [mobileWarningRemove, setMobileWarningRemove] = useState(false);
  const deviceType = useDeviceDetect();

  useEffect(() => {
    console.log(
      "%cLet's create together 😄",
      "font-size: 40px; font-weight: bold"
    );
  }, []);

  return (
    <>
      <ThemeProvider>
        {deviceType === "Mobile" && !mobileWarningRemove && (
          <div className="mobileDevice">
            <p
              className="mobileDevice_text"
              onClick={() => setMobileWarningRemove(true)}
            >
              This site was designed with landscape in mind, select "add to home
              screen" in options for a better mobile experience.
            </p>
          </div>
        )}
        <Navbar scrollbar={scrollbar} />
        <div className="bg" />
        <div className="bgProj" />
        <Scroller setScrollbar={setScrollbar}>
          <Home />
          <AboutMe />
          <Projects />
          <Skills />
          <Contact />
        </Scroller>
      </ThemeProvider>
    </>
  );
}

export default App;
