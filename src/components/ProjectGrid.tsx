
import React from "react";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <section id="projetos" className="py-20 dark:bg-[#0F172A] bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wider text-sm">Meu trabalho</span>
          <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900 dark:text-blue-100">Projetos em Destaque</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
            Aqui estão alguns dos meus trabalhos mais recentes. Cada projeto representa um desafio único que me ajudou a crescer como desenvolvedor.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
