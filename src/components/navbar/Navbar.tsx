import { useEffect, useState } from "react";
import ThemeSetter from "./ThemeSetter.tsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { Scrollbar } from "smooth-scrollbar/scrollbar";

const Navbar = ({ scrollbar }: { scrollbar: Scrollbar | null }) => {
  const [sections, setSections] = useState<
    Array<{ top: number; left: number }>
  >([]);
  const [menuSVG, setMenuSVG] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const GetPositions = () => {
      const getSections = document.querySelectorAll(".scrollTo");
      const positions: Array<{ top: number; left: number }> = [];
      getSections.forEach((elem) =>
        positions.push({
          top: elem.getBoundingClientRect().top,
          left: elem.getBoundingClientRect().left,
        })
      );

      if (positions[0].left < 0) {
        const homePosition = positions[0].left;
        positions.forEach((elem) => {
          elem.left = elem.left - homePosition;
        });
      }

      if (positions[0].top < 0) {
        const homePosition = positions[0].top;
        positions.forEach((elem) => {
          elem.top = elem.top - homePosition;
        });
      }

      setSections(positions);
    };
    // GetPositions();
    const fixPosition = setTimeout(() => GetPositions(), 0);
    window.addEventListener("resize", GetPositions);
    return () => {
      window.removeEventListener("resize", GetPositions);
      clearTimeout(fixPosition);
    };
  }, []);

  const handleSelect = (key: number) => {
    if (!scrollbar) return;
    scrollbar.scrollTo(sections[key].left, sections[key].top, 1000);
    setMenuSVG(false);
    menuSvgDisabled();
  };

  const menuSvgActive = () => {
    setMenuSVG(true);
    gsap.to(".menu_svg_path", {
      attr: {
        d: "M49.29,21L219,190.72 M21.01,49.28L190.71,219 M21,190.7L190.72,21 M49.28,218.99L219,49.29",
      },
      duration: 0.5,
    });
    ScrollTrigger.matchMedia({
      "(orientation: landscape)": function () {
        gsap.to(".navbar_sections", {
          autoAlpha: 1,
          duration: 0.5,
        });
      },
      "(orientation: portrait)": function () {
        gsap.to(".navbar_sections", {
          autoAlpha: 1,
          duration: 0.5,
        });
      },
    });
  };

  const menuSvgDisabled = () => {
    setMenuSVG(false);
    gsap.to(".menu_svg_path", {
      attr: {
        d: "M0,71L240,71 M0,90L240,90 M0,149L240,149 M0,168L240,168",
      },
      duration: 0.5,
    });
    ScrollTrigger.matchMedia({
      "(orientation: landscape)": function () {
        gsap.to(".navbar_sections", {
          autoAlpha: 1,
          opacity: 1,
          duration: 0.5,
        });
      },
      "(orientation: portrait)": function () {
        gsap.to(".navbar_sections", {
          autoAlpha: 0,
          duration: 0.5,
        });
      },
    });
  };

  return (
    <div className="navbar">
      <ThemeSetter />
      <svg
        tabIndex={0}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 240 240"
        className="menusvg"
        onClick={menuSVG ? menuSvgDisabled : menuSvgActive}
        onKeyPress={menuSVG ? menuSvgDisabled : menuSvgActive}
      >
        <path
          className="menu_svg_path menu_svg_stroke"
          strokeWidth="20"
          d="M0,71L240,71 M0,90L240,90 M0,149L240,149 M0,168L240,168"
        />
      </svg>
      <div className="navbar_sections">
        <button onClick={() => handleSelect(0)}>Home</button>
        <button onClick={() => handleSelect(1)}>About Me</button>
        <button onClick={() => handleSelect(2)}>Projects</button>
        <button onClick={() => handleSelect(3)}>Skills</button>
        <button onClick={() => handleSelect(4)}>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
