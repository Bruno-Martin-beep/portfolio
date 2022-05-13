import React, { useEffect, useState } from "react";
import "./styles/main.scss";

import useTheme from "./hooks/useTheme";
import MobileWarning from "./components/MobileWarning";
import Navbar from "./components/navbar/Navbar";
import Scroller from "./components/layout/Scroller";
import Home from "./components/layout/Home";
import AboutMe from "./components/layout/AboutMe";
import Projects from "./components/layout/Projects";
import Skills from "./components/layout/Skills";
import Contact from "./components/layout/Contact";

function App() {
  const handleTheme = useTheme();
  const [scrollbar, setScrollbar] = useState(null);

  useEffect(() => {
    console.log(
      "%cLet's create together 😄",
      "font-size: 40px; font-weight: bold"
    );
  }, []);

  return (
    <>
      <MobileWarning />
      <Navbar scrollbar={scrollbar} handleTheme={handleTheme} />
      <div className="bg" />
      <div className="bgProj" />
      <Scroller setScrollbar={setScrollbar}>
        <Home />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </Scroller>
    </>
  );
}

export default App;
