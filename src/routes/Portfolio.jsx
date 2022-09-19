import { Container, Grid } from "@mui/material";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { getProject, getProjects } from "../data";

export default function Portfolio() {
  let projects = getProjects();

  return (
    <div className="Portfolio">
      <h1>Portfolio</h1>
      <h2>This is an Overview of my personal Projects I've been working on</h2>
      <Container>
        <Grid container spacing={4}>
          {projects.map((project, i) => (
            // <h3>{project.title}</h3>
            <Grid item key={i} xs={12} sm={6} md={4}>
              <ProjectCard project={project}></ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
