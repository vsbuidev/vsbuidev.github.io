import ProjectCard from "./ProjectCard.tsx";
import projectsData from "../data/projects.json";
import { FaProjectDiagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

interface Project {
  id: number;
  name: string;
  languages: string[];
  description: string;
  github_url: string;
  image_url: string;
}

export default function Projects() {
  const projects: Project[] = projectsData.map((project) => ({
    ...project,
    languages: Array.isArray(project.languages)
      ? project.languages
      : [project.languages],
  }));

  return (
    <div>
      <div className="flex items-center justify-between text-white">
        <div className="flex gap-x-2 items-center">
          <div>
            <FaProjectDiagram className="text-gray-400" />
          </div>
          <div className="font-bold text-xl">Projects ({projects.length})</div>
        </div>
        <div className="group flex gap-x-2 items-center cursor-pointer">
          <div className="opacity-0 duration-[1200ms] group-hover:opacity-100 pr-1 group-hover:pr-4">
            Live
          </div>
          <div>
            <FaArrowRight className="text-gray-400" />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-gray-400 mb-5">
          Below is a selection of recent projects that I've worked on.
        </p>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            lang={project.languages}
            repoName={project.name}
            link={project.github_url}
            imageUrl={project.image_url}
            description={project.description}
          />
        ))}
      </div>
      <div className="text-center text-gray-300">
        Inspired by{" "}
        <a
          className="text-white"
          target="_blank"
          href="https://www.kingslee.me/"
        >
          kingslee
        </a>
      </div>
    </div>
  );
}
