import { useState, type JSX } from "react";
import { skillsCurrent, skillsUpcoming } from "../../mocks/skillItems.tsx";
import gsap from "gsap";

const Skills = () => {
  const [svg, setSvg] = useState(skillsCurrent[0].svg);

  const mouseOver = (svg: JSX.Element) => {
    setSvg(svg);
    gsap.to(".bracket_gap", {
      marginLeft: "clamp(9vh, 35vw, 40vh)",
      duration: 0.5,
      ease: "power1.out",
      // ease: CustomEase.create(
      //   "custom",
      //   "M0,0 C0.068,0 0.128,-0.061 0.175,-0.081 0.224,-0.102 0.267,-0.107 0.315,-0.065 0.384,-0.004 0.449,0.253 0.465,0.323 0.566,0.704 0.622,0.938 1,1 "
      // ),
    });
    gsap.fromTo(
      ".skill_svg",
      {
        opacity: 0,
        transform: "scale(0.6)",
        transformOrigin: "center center",
      },
      {
        opacity: 1,
        transform: "scale(1)",
        transformOrigin: "center center",
        duration: 0.4,
        ease: "power1.out",
      }
    );
  };

  const mouseLeave = () => {
    gsap.to(".bracket_gap", {
      marginLeft: "clamp(10vh, 5vw, 12vh)",
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.fromTo(
      ".skill_svg",
      {
        opacity: 1,
        transform: "scale(1)",
        transformOrigin: "center center",
      },
      {
        opacity: 0,
        transform: "scale(0.6)",
        transformOrigin: "center center",
        duration: 0.4,
        ease: "power2.Out",
      }
    );
  };

  return (
    <section className="section">
      <h2>Skills</h2>
      <div className="skill_cont scrollTo">
        <div>
          <p className="skill_text">
            const <span className="bold upper">current</span> = [{" "}
            {skillsCurrent.map((elem, id) => {
              return (
                <span
                  key={elem.name}
                  onMouseOver={() => mouseOver(elem.svg)}
                  onMouseLeave={() => mouseLeave()}
                >
                  {" "}
                  {elem.name}
                  {id !== skillsCurrent.length - 1 && ","}
                </span>
              );
            })}{" "}
            ];
          </p>
        </div>
        <div>
          <p className="skill_text">
            const <span className="bold upper">upcoming</span> = [{" "}
            {skillsUpcoming.map((elem, id) => {
              return (
                <span
                  key={elem.name}
                  onMouseOver={() => mouseOver(elem.svg)}
                  onMouseLeave={() => mouseLeave()}
                >
                  {" "}
                  {elem.name}
                  {id !== skillsUpcoming.length - 1 && ","}
                </span>
              );
            })}{" "}
            ];
          </p>
        </div>
        <div className="skill_icon">
          <p className="skill_bracket">[</p>
          {svg}
          <p className="skill_bracket bracket_gap">]</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
