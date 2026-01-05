import { useEffect } from "react";
import "./styles/main.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/layout/Home";
import AboutMe from "./components/layout/AboutMe";
import Projects from "./components/layout/Projects";
import Skills from "./components/layout/Skills";
import Contact from "./components/layout/Contact";
import { useScrollbar } from "./hooks/useScrollbar";

function App() {
  const scrollbar = useScrollbar();

  useEffect(() => {
    console.log(
      "%cLet's create together 😄",
      "font-size: 40px; font-weight: bold"
    );
  }, []);

  return (
    <>
      <Navbar scrollbar={scrollbar} />
      <div className="bg" />
      <div className="bgProj bgProj_blue" />
      <div className="bgProj bgProj_green" />
      <div id="my-scrollbar" className="scroller">
        <div className="wrapper">
          <Home />
          <AboutMe />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
