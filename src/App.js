import React, { useEffect, useState } from "react";
import "./styles/main.scss";

import ThemeProvider from "./components/Contexts/ThemeProvider";
import Navbar from "./components/navbar/Navbar";
import Scroller from "./components/layout/Scroller";
import Home from "./components/layout/Home";
import AboutMe from "./components/layout/AboutMe";
import Projects from "./components/layout/Projects";
import Skills from "./components/layout/Skills";
import Contact from "./components/layout/Contact";
import MobileWarning from "./components/MobileWarning";

function App() {
  const [scrollbar, setScrollbar] = useState(null);

  useEffect(() => {
    console.log(
      "%cLet's create together 😄",
      "font-size: 40px; font-weight: bold"
    );
  }, []);

  return (
    <>
      <ThemeProvider>
        <MobileWarning />
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
