import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import { useMediaQuery } from "usehooks-ts";

gsap.registerPlugin(ScrollTrigger);

type Delta = {
  x: number;
  y: number;
};

class VerticalScrollPlugin extends Scrollbar.ScrollbarPlugin {
  static pluginName = "verticalScroll";

  transformDelta({ x, y }: Delta, fromEvent: Event) {
    if (!/wheel/.test(fromEvent.type)) {
      return { x, y };
    }

    return {
      y: Math.abs(x) > Math.abs(y) ? x : y,
      x: 0,
    };
  }
}

class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
  static pluginName = "horizontalScroll";

  transformDelta({ x, y }: Delta, fromEvent: Event) {
    if (!/wheel/.test(fromEvent.type)) {
      return { x, y };
    }

    return {
      y: 0,
      x: Math.abs(x) > Math.abs(y) ? x : y,
    };
  }
}

export const useScrollbar = () => {
  const horizontal = useMediaQuery("(orientation: landscape)");
  const [scrollbar, setScrollbar] = useState<Scrollbar | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Scrollbar.use(
      horizontal ? HorizontalScrollPlugin : VerticalScrollPlugin,
      OverscrollPlugin
    );

    const bodyScrollBar = Scrollbar.init(
      document.querySelector("#my-scrollbar") as HTMLElement,
      {
        damping: 0.075,
        alwaysShowTracks: true,
        continuousScrolling: true,
        delegateTo: document,
      }
    );
    setScrollbar(bodyScrollBar);

    ScrollTrigger.scrollerProxy("#my-scrollbar", {
      scrollTop(value) {
        if (arguments.length && value) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
      scrollLeft(value) {
        if (arguments.length && value) {
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

    //
    // backColor
    //

    const bgAnim = (color: string) =>
      gsap.fromTo(
        `.bgProj_` + color,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 }
      );
    ScrollTrigger.create({
      animation: bgAnim("blue"),
      trigger: ".proj_bg_blue",
      scroller: ".scroller",
      horizontal: horizontal,
      toggleActions: "play reverse play reverse",
      start: "top-=100% top",
      end: "end+=50% top",
    });
    ScrollTrigger.create({
      animation: bgAnim("green"),
      trigger: ".proj_bg_green",
      scroller: ".scroller",
      horizontal: horizontal,
      toggleActions: "play reverse play reverse",
      start: "top-=100% top",
      end: "end+=50% top",
    });

    //
    // asteriskRotation
    //

    const tween = gsap
      .to(".asterisk", {
        rotation: 360,
        duration: 4,
        ease: "none",
        repeat: -1,
      })
      .totalProgress(0.5);
    const upVel = gsap.timeline();
    const clampVel = gsap.utils.clamp(-4, 4);
    ScrollTrigger.create({
      trigger: ".scroller",
      scroller: ".scroller",
      horizontal,
      start: "center center",
      end: "+=250%",
      onUpdate({ getVelocity }) {
        const timeScale = clampVel(getVelocity() / 50);
        upVel
          .clear()
          .to(tween, {
            duration: 1,
            timeScale,
          })
          .to(tween, {
            duration: 1,
            timeScale,
          });
      },
    });

    //
    // parallax
    //

    const parallax = gsap.to(
      "h1",
      horizontal
        ? {
            x: "25%",
          }
        : {
            y: "22.5vh",
          }
    );
    ScrollTrigger.create({
      animation: parallax,
      trigger: ".scroller",
      scroller: ".scroller",
      horizontal,
      start: "top top",
      end: "+=100% end",
      scrub: true,
    });

    return () => {
      bodyScrollBar.removeListener(ScrollTrigger.update);
      bodyScrollBar.destroy();
      ScrollTrigger.killAll();
    };
  }, [horizontal]);

  return scrollbar;
};
