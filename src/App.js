import React, { useState, useEffect } from "react";
import "./styles/main.scss";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

import ThemeProvider from "./components/Contexts/ThemeProvider";
import useDeviceDetect from "./components/useDeviceDetect";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [scrollbar, setScrollbar] = useState(null);
  const [mobileWarningRemove, setMobileWarningRemove] = useState(false);
  const deviceType = useDeviceDetect();

  const scrollbarResponsive = (horizontal) => {
    Scrollbar.destroyAll();

    class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
      static pluginName = "horizontalScroll";

      transformDelta(delta, fromEvent) {
        if (!/wheel/.test(fromEvent.type)) {
          return delta;
        }

        const { x, y } = delta;

        if (horizontal) {
          return {
            y: 0,
            x: Math.abs(x) > Math.abs(y) ? x : y,
          };
        }
        return {
          y: Math.abs(x) > Math.abs(y) ? x : y,
          x: 0,
        };
      }
    }

    Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin);

    const options = {
      damping: 0.075,
      alwaysShowTracks: true,
      continuousScrolling: true,
      delegateTo: document,
    };

    let bodyScrollBar = Scrollbar.init(
      document.querySelector("#my-scrollbar"),
      options
    );

    setScrollbar(bodyScrollBar);

    ScrollTrigger.scrollerProxy("#my-scrollbar", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
      scrollLeft(value) {
        if (arguments.length) {
          bodyScrollBar.scrollLeft = value;
        }
        return bodyScrollBar.scrollLeft;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    ///backColor

    const backColor = gsap.fromTo(
      ".bgProj",
      { opacity: 0 },
      { opacity: 1, duration: 0.6 }
    );

    ScrollTrigger.create({
      animation: backColor,
      trigger: ".proj_cont",
      scroller: ".scroller",
      horizontal: horizontal,
      toggleActions: "play reverse play reverse",
      start: "top-=30% top",
      end: "end+=70% top",
    });

    ///asteriskRotation

    const tween = gsap
      .to(".asterisk", {
        rotation: 360,
        duration: 4,
        ease: "none",
        repeat: -1,
      })
      .totalProgress(0.5);

    let upVel = gsap.timeline();
    let clampVel = gsap.utils.clamp(-4, 4);

    ScrollTrigger.create({
      trigger: ".scroller",
      scroller: ".scroller",
      horizontal: horizontal,
      start: "center center",
      end: "+=250%",
      onUpdate({ getVelocity }) {
        const velocity = clampVel(getVelocity() / 50);

        let timeScale = velocity;
        let endTimeScale = velocity;

        upVel
          .clear()
          .to(tween, {
            duration: 1,
            timeScale: timeScale,
          })
          .to(tween, {
            duration: 1,
            timeScale: endTimeScale,
          });
      },
    });

    ///parallax

    let parallax;

    if (horizontal) {
      parallax = gsap.to("h1", {
        x: "25%",
      });
    } else {
      parallax = gsap.to("h1", {
        y: "22.5vh",
      });
    }

    ScrollTrigger.create({
      animation: parallax,
      trigger: ".scroller",
      scroller: ".scroller",
      horizontal: horizontal,
      start: "top top",
      end: "+=100% end",
      scrub: true,
    });
  };

  useEffect(() => {
    console.log("%cLet's create together 😄", "font-size: 40px; font-weight: bold");
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
      "(orientation: landscape)": function () {
        scrollbarResponsive(true);
      },

      "(orientation: portrait)": function () {
        scrollbarResponsive(false);
      },
    });
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
        <div id="my-scrollbar" className="scroller">
          <div className="wrapper">
            <Home />
            <AboutMe />
            <Projects />
            <Skills />
            <Contact />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
