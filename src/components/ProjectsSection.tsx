import React from "react";
import { projects } from "@/data/projects";
import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard from "./ProjectCard";

const ProjectsSection: React.FC = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-blue-500">
        My Projects
      </h1>

      {featured.map((project) => (
        <FeaturedProjectCard key={project.id} project={project} />
      ))}

      {others.length > 0 && (
        <>
          <h2 className="text-2xl font-bold text-blue-300 mb-6 mt-4">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default ProjectsSection;
