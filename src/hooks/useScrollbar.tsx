import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "usehooks-ts";
import { euclideanModulo, damp } from "../utils/Math";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);


export const useScrollbar = () => {
  const horizontal = useMediaQuery("(orientation: landscape)");
  const [scrollbar, setScrollbar] = useState<Lenis | null>(null);
  useEffect(() => {
    // Initialize a new Lenis instance for smooth scrolling
    const lenis = new Lenis(
      {
        autoRaf: true,
        orientation: horizontal ? "horizontal" : "vertical"
      }
    );

    setScrollbar(lenis)

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on("scroll", ScrollTrigger.update);

    //
    // backColor
    //

    const bgAnim = (color: string) =>
      gsap.to(
        `.bgProj_` + color,
        { opacity: 1, duration: 0.6 }
      );
    ScrollTrigger.create({
      animation: bgAnim("blue"),
      trigger: ".proj_bg_blue",
      horizontal: horizontal,
      toggleActions: "play reverse play reverse",
      start: "top-=100% top",
      end: "end+=50% top",
    });
    ScrollTrigger.create({
      animation: bgAnim("green"),
      trigger: ".proj_bg_green",
      horizontal: horizontal,
      toggleActions: "play reverse play reverse",
      start: "top-=100% top",
      end: "end+=50% top",
    });

    //
    // asteriskRotation
    //

    let currentRotation = 0;
    let currentVelocity = 1.5; // Base low speed
    let targetVelocity = 1.5;
    let baseVelocity = 1.5; // Remembers the direction of the last scroll
    const MAX_SPEED = 5;
    let reqId: number;
    let lastTime: number | undefined;

    const asterisks = document.querySelectorAll<HTMLElement>(".asterisk");

    const updateRotation = (time: number) => {
      if (lastTime === undefined) {
        lastTime = time;
      }
      const dt = (time - lastTime) / 1000; // Convert ms to seconds
      lastTime = time;

      // Damp current velocity towards target velocity for smooth transitions
      // Lower lambda values give it more "ease" / sluggishness (e.g. 2.0 instead of 6.3)
      currentVelocity = damp(currentVelocity, targetVelocity, 2.5, dt);
      currentRotation = euclideanModulo(currentRotation + currentVelocity, 360);

      asterisks.forEach((el) => {
        el.style.transform = `rotate(${currentRotation}deg)`;
      });

      // Slowly decay target velocity back to the base velocity
      // lambda = 1.2 roughly matches lerp factor 0.02 at 60fps
      targetVelocity = damp(targetVelocity, baseVelocity, 2.0, dt);

      reqId = requestAnimationFrame(updateRotation);
    };

    reqId = requestAnimationFrame(updateRotation);

    const handleScroll = ({ velocity }: Lenis) => {
      if (Math.abs(velocity) <= 0) return;

      // Multiplier controls the rotation sensitivity
      const newVelocity = velocity * 0.5;

      // Update the base velocity direction to continue spinning that way when idle
      baseVelocity = velocity >= 0 ? 1.5 : -1.5;

      // Ensure scrolling doesn't make the asterisk spin slower than the idle base velocity
      if (velocity > 0) {
        targetVelocity = Math.max(baseVelocity, Math.min(MAX_SPEED, targetVelocity + newVelocity));
      } else {
        targetVelocity = Math.max(-MAX_SPEED, Math.min(baseVelocity, targetVelocity + newVelocity));
      }
    };

    lenis.on("scroll", handleScroll);

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
      cancelAnimationFrame(reqId);
    }
  }, [horizontal])

  return scrollbar;
};
