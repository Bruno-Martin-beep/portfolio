import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ThemeSetter } from "./ThemeSetter";

const Navbar = ({ scrollbar }) => {
  const [sections, setSections] = useState(null);

  gsap.registerPlugin(ScrollToPlugin);

  useEffect(() => {
    const GetPositions = () => {
      const getSections = document.querySelectorAll(".scrollTo");
      console.log(getSections);
      let positions = [];
      getSections.forEach((elem) => positions.push(elem.getBoundingClientRect().left));
      if (positions[0] < 0) {
        positions = positions.map((elem) => elem - positions[0]);
      }
      setSections(() => positions);
    };
    GetPositions();
    window.addEventListener("resize", GetPositions);
    return () => {
      window.removeEventListener("resize", GetPositions);
    };
  }, []);

  const handleSelect = (key) => {
    scrollbar.scrollTo(sections[key], 0, 1000);
  };

  return (
    <div className="navbar">
      <ThemeSetter />
      <ul className="navbar_sections">
        <li onClick={() => handleSelect(0)}>Home</li>
        <li onClick={() => handleSelect(1)}>About Me</li>
        <li onClick={() => handleSelect(2)}>Projects</li>
        <li onClick={() => handleSelect(3)}>Skills</li>
        <li onClick={() => handleSelect(4)}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
