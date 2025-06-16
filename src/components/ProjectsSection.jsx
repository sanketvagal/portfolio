import React from "react";
import { Github } from "lucide-react";

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group backdrop-blur-xl bg-white/5 rounded-3xl p-6 border border-white/10 
                       hover:bg-white/10 active:bg-white/10 
                       transform hover:scale-[1.05] active:scale-[1.05] 
                       transition-all duration-300"
            >
              <div
                className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-6 opacity-80`}
              ></div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white active:text-white 
                             transition-colors duration-200 
                             opacity-0 group-hover:opacity-100 group-active:opacity-100"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                {project.description}
              </p>
              <p className="text-xs text-gray-400 mb-4">{project.period}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white/10 rounded-lg text-xs border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
