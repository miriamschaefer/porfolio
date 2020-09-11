import React, { useState } from 'react';
import Project from './Project';

const ProjectList = (props) => {
  const listProject = props.projects.map((project) => {
    return (
      <li key={project.id}>
        <div className="projects__fondo">
          <Project project={project} />
        </div>
      </li>
    );
  });

  return <ul className="projects">{listProject}</ul>;
};

export default ProjectList;
