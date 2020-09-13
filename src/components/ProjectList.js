import React from 'react';
import Project from './Project';

const ProjectList = (props) => {
  const { id } = props;

  const listProject = props.projects.map((project) => {
    return (
      <li className="main__projects__item" key={id} id={id}>
        <Project project={project} />
      </li>
    );
  });

  return <ul className="main__projects">{listProject}</ul>;
};

export default ProjectList;
