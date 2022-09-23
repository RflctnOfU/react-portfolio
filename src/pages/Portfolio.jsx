import React from "react";
import ProjectData from "../projects/ProjectData";
import Card from "../components/Card";

const Portfolio = () => {
  const projects = ProjectData;
  return (
    <div className="my-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-24">
      {projects.map((project) => (
        <Card
          id={project.id}
          image={project.image}
          description={project.description}
          title={project.title}
          live={project.live}
          github={project.github}
        />
      ))}
    </div>
  );
};

export default Portfolio;
