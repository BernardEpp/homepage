let projects = [
  {
    title: "Project 1",
    projectId: 1,
    techStack: "React + Next",
    Description: "Project Description",
    Abstract: "Project Abstract",
  },
  {
    title: "Project 2",
    projectId: 2,
    techStack: "Vue + Express",
    Description: "Project Description",
    Abstract: "Project Abstract",
  },
  {
    title: "Project 3",
    projectId: 3,
    techStack: "Blazor",
    Description: "Project Description",
    Abstract: "Project Abstract",
  },
  {
    title: "Project 4",
    projectId: 4,
    techStack: "Vue + Express",
    Description: "Project Description",
    Abstract: "Project Abstract",
  },
  {
    title: "Project 5",
    projectId: 5,
    techStack: "Blazor",
    Description: "Project Description",
    Abstract: "Project Abstract",
  },
];

export function getProjects() {
  return projects;
}

export function getProject(projectId) {
  return projects.find((project) => project.id === projectId);
}
