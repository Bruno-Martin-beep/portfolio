import React, { useState, useEffect } from "react";
import "./styles/main.css";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

import ThemeProvider from "./components/Contexts/ThemeProvider";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [scrollbar, setScrollbar] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
      static pluginName = "horizontalScroll";

      transformDelta(delta, fromEvent) {
        if (!/wheel/.test(fromEvent.type)) {
          return delta;
        }

        const { x, y } = delta;

        return {
          y: 0,
          x: Math.abs(x) > Math.abs(y) ? x : y,
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
      horizontal: true,
      toggleActions: "play reverse play reverse",
      start: "top-=30% top",
      end: "end+=50% top",
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
      horizontal: true,
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

    const parallax = gsap.to("h1", {
      x: "20%",
    });
    // .to("h1", {
    //   x: "20%",
    // });

    ScrollTrigger.create({
      animation: parallax,
      trigger: ".scroller",
      scroller: ".scroller",
      horizontal: true,
      start: "top top",
      end: "+=100% end",
      scrub: true,
    });

    // skew effect

    // let proxy = { skew: 0 },
    //   skewSetter = gsap.quickSetter(".skewer", "skewX", "deg"),
    //   clamp = gsap.utils.clamp(-20, 20);

    // ScrollTrigger.create({
    //   scroller: ".scroller",
    //   horizontal: true,

    //   onUpdate: (self) => {
    //     let skew = clamp(self.getVelocity() / -200);
    //     if (Math.abs(skew) > Math.abs(proxy.skew)) {
    //       proxy.skew = skew;
    //       gsap.to(proxy, {
    //         skew: 0,
    //         duration: 0.8,
    //         ease: "power3",
    //         overwrite: true,
    //         onUpdate: () => skewSetter(proxy.skew),
    //       });
    //     }
    //   },
    // });

    // gsap.set(".skewer", {
    //   transformOrigin: "center center",
    //   force3D: true,
    // });
  }, []);

  return (
    <>
      <ThemeProvider>
        <Navbar scrollbar={scrollbar} />
          <div className="bg"></div>
          <div className="bgProj"></div>
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
