import React from 'react';
//import './Projects.css'; // optional

const Projects = () => {
  // Example data: Replace with real projects or fetch from an API
  const myProjects = [
    { title: 'Project One', description: 'Description of Project One', url: '#' },
    { title: 'Project Two', description: 'Description of Project Two', url: '#' },
    { title: 'Project Three', description: 'Description of Project Three', url: '#' },
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {myProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
