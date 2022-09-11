import React from "react";
import ProjectCard from "../components/ProjectCard";
import { getProject, getProjects } from "../data";

export default function Portfolio() {
  let projects = getProjects();

  return (
    <div className="Portfolio">
      <h1>Portfolio</h1>
      <h2>This is an Overview of my personal Projects I've been working on</h2>
      {projects.map((project) => (
        // <h3>{project.title}</h3>
        <ProjectCard></ProjectCard>
      ))}
    </div>
  );
}
