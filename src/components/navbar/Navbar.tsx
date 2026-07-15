import { useEffect, useState } from "react";
import ThemeSetter from "./ThemeSetter.tsx";
import gsap from "gsap";
import type Lenis from "lenis";
import { useMediaQuery } from "usehooks-ts";

const Navbar = ({ scrollbar }: { scrollbar: Lenis | null }) => {
  const horizontal = useMediaQuery("(orientation: landscape)");
  const [menuSVG, setMenuSVG] = useState(false);

  useEffect(() => {
    if (horizontal) {
      gsap.to(".navbar_sections", {
        autoAlpha: 1,
        opacity: 1,
        duration: 0.5,
      });
    } else if (menuSVG) {
      gsap.to(".navbar_sections", {
        autoAlpha: 1,
        opacity: 1,
        duration: 0.5,
      });
    } else {
      const sections = document.querySelector<HTMLElement>(".navbar_sections")
      if (sections) {
        sections.style.opacity = "0";
        sections.style.visibility = "hidden";
      }
      gsap.to(".navbar_sections", {
        autoAlpha: 0,
        duration: 0.5,
      });
    }


  }, [horizontal])



  const handleSelect = (key: number) => {
    if (!scrollbar) return;

    const getSections = document.querySelectorAll<HTMLElement>(".scrollTo");
    const targetSection = getSections[key];

    if (targetSection) {
      scrollbar.scrollTo(targetSection, {
        duration: 1,
      });
    }

    setMenuSVG(false);
    if (!horizontal) menuSvgDisabled();
  };

  const menuSvgActive = () => {
    setMenuSVG(true);
    gsap.to(".menu_svg_path", {
      attr: {
        d: "M49.29,21L219,190.72 M21.01,49.28L190.71,219 M21,190.7L190.72,21 M49.28,218.99L219,49.29",
      },
      duration: 0.5,
    });

    gsap.to(".navbar_sections", {
      autoAlpha: 1,
      duration: 0.5,
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
    gsap.to(".navbar_sections", {
      autoAlpha: 0,
      duration: 0.5,
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
