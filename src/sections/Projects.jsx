import { personalInfo } from "../data/personalInfo";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const { projects } = personalInfo;

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-900 py-10 px-6 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Get Icon Component from string name
const getIconComponent = (iconName) => {
  const Icon = FaIcons[iconName] || SiIcons[iconName];
  return Icon || FaIcons.FaCode;
};

// Project Item Component
const ProjectItem = ({ project }) => {
  return (
    <div className="grid grid-cols-10 gap-4 group">
      {/* Column 1: Period/Time - Aligned with dot */}
      <div className="col-span-1 flex items-start justify-end pt-0">
        <span className="text-sm font-semibold text-blue-700 dark:text-orange-400">
          {project.period}
        </span>
      </div>

      {/* Column 2: Timeline with centered dot */}
      <div className="col-span-1 flex justify-center relative">
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-blue-300 dark:bg-orange-300"></div>
        {/* Dot - Centered */}
        <div className="relative w-4 h-4 bg-blue-600 dark:bg-orange-500 rounded-full border-4 border-white dark:border-gray-900 z-10 transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg"></div>
      </div>

      {/* Column 3-10: Project Content (8 columns) */}
      <div className="col-span-8">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-blue-400 dark:hover:border-orange-400">
          {/* Project Name */}
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-slate-600 dark:text-gray-300 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3 mb-4">
            {project.technologies.map((tech, idx) => {
              const IconComponent = getIconComponent(project.techIcons[idx]);
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-gray-700 rounded-lg border border-slate-200 dark:border-gray-600"
                >
                  <IconComponent
                    className="text-lg"
                    style={{ color: project.techColors[idx] }}
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-gray-200">
                    {tech}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Highlights */}
          {project.highlights && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2">
                Key Features:
              </h4>
              <ul className="space-y-1">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-slate-600 dark:text-gray-400 flex items-start gap-2"
                  >
                    <span className="text-blue-600 dark:text-orange-500 mt-0.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          <div className="flex gap-3">
            {project.links.githubBackend && (
              <a
                href={project.links.githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-gray-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                <FaGithub className="text-lg" />
                <span className="text-sm font-medium">Backend API</span>
              </a>
            )}
            {project.links.githubFrontend && (
              <a
                href={project.links.githubFrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-orange-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-orange-600 transition-colors duration-300"
              >
                <FaGithub className="text-lg" />
                <span className="text-sm font-medium">Frontend App</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
