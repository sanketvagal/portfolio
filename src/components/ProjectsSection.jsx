import React from "react";

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
              className="group backdrop-blur-xl bg-white/5 rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.05]"
            >
              <div
                className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-6 opacity-80`}
              ></div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">
                {project.description}
              </p>
              <p className="text-xs text-gray-500 mb-4">{project.period}</p>
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
