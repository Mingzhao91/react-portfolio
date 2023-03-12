// import libraries
import React, { useState } from "react";

// import projects
import projectsJSON from "../../projects.json";

// import components
import Wrapper from "../../components/Wrapper";
import Project from "../../components/Project";

// import style
import "./style.css";

function Projects() {
  const [projects] = useState([...projectsJSON]);

  return (
    <Wrapper>
      <div className="projects-page mt-5 mx-auto">
        <h2 className="projects-title text-center py-4">Selected Project</h2>
        {projects.map((project) => (
          <div className="projects-wrapper">
            <Project
              id={project.id}
              key={project.id}
              name={project.name}
              image={project.image}
              description={project.description}
              repoUrl={project.repoUrl}
              appUrl={project.appUrl}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default Projects;
