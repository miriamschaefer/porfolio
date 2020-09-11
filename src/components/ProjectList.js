import React, { useState } from 'react';
import Project from './Project';

const ProjectList = (props) => {
  const [hover, setMouseOver] = useState('true');

  let handleMouseOver = (hover) => {
    setMouseOver({ hover: true });
  };

  // let handleMouseOut = (hover) => {
  //   setMouseOut({ hover: false });
  // };

  const listProject = props.projects.map((project) => {
    return (
      <li key={project.id}>
        <div className={`projects__fondo ${hover === true ? '' : 'hidden'}`}>
          <Project project={project} handleMouseOver={hover} />
        </div>
      </li>
    );
  });

  return <ul className="projects">{listProject}</ul>;
};

export default ProjectList;
