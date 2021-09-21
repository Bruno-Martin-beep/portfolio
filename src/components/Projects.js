import React from "react";
import shinji from "../assets/shinji.png";


const Projects = () => {

  return (
    <section className="section">
      <h2>Projects</h2>
      <div id="proj" className="proj_cont scrollTo">
        <div className="proj_info">
          <div>
            <p className="Proj_ftilte">EVANGELION</p>
            <p className="proj_stitle">MEMORY GAME</p>
          </div>
          <p className="proj_text">
            A mini-game of making pairs, where you can raise your score,
            developed with <span className="bold">React</span>,{" "}
            <span className="bold">Firebase</span> and{" "}
            <span className="bold">Gsap</span>.
          </p>
          <div className="proj_link">
            <p className="proj_link">view live</p>
            <p className="proj_link">view repo</p>
          </div>
        </div>
        <div className="proj_img">
          <img src={shinji} alt="shinji" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
