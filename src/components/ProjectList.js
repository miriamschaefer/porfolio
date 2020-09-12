import React from 'react';
import Project from './Project';

const ProjectList = (props) => {
  const listProject = props.projects.map((project) => {
    return (
      <li key={project.id} id={project.id}>
        <Project project={project} />
      </li>
    );
  });

  return <ul className="projects">{listProject}</ul>;
};

export default ProjectList;
