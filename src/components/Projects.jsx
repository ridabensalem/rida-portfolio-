import React from "react";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";
import { HiOutlineCode } from "react-icons/hi";
function Projects() {
  return (
    <section id="projects" className=" py-10 ">
      <div className="container mx-auto">
        <section id="projects" className="py-10">
          <div className="container ">
            <div className="icon-container flex justify-center">
              <HiOutlineCode className="text-coding-color  text-6xl  " />
            </div>
            <h2 className="text-3xl font-bold mb-10 text-white project-header text-center">My Projects</h2>
            <div className=" project-card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

      </div>
    </section>
  )
}
export default Projects;