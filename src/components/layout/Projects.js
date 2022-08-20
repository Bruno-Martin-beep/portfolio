import React from "react";
import projectsList from "../../mocks/projectsList";

const Projects = () => {
  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="projects_cont scrollTo">
        {projectsList.map((project, index) => (
          <div key={index} className={`proj_cont ${project.className}`}>
            <div className="proj_img_cont">
              <img className="proj_img" src={project.image} alt="" />
              {project.linkRepo && (
                <a
                  className="proj_repo"
                  target="_blank"
                  rel="noreferrer"
                  href={project.linkRepo}
                >
                  <svg
                    viewBox="0 0 68 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="68" height="68" fill="white" />
                    <path
                      d="M27.65 43.85L17.3 33.5L27.65 23.15L24.5 20L11 33.5L24.5 47L27.65 43.85ZM39.35 43.85L49.7 33.5L39.35 23.15L42.5 20L56 33.5L42.5 47L39.35 43.85V43.85Z"
                      fill="black"
                    />
                  </svg>
                </a>
              )}
            </div>
            {project.linkLive ? (
              <a
                className="proj_title"
                target="_blank"
                rel="noreferrer"
                href={project.linkLive}
              >
                <span className="proj_title_link">{project.title}</span> →
              </a>
            ) : (
              <p className="proj_title">{project.title}</p>
            )}
            <p className="proj_desc">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
