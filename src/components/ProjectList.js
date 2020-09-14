import React, { useState } from 'react';
import Project from './Project';

const ProjectList = (props) => {
  // const [isShown, setIsShown] = useState(false);

  const listProject = props.projects.map((project) => {
    return (
      <li
        className="main__projects__item"
        key={project.id}
        id={project.id}
        // onMouseEnter={() => setIsShown(true)}
        // onMouseLeave={() => setIsShown(false)}
      >
        <Project project={project} />
      </li>
    );
  });

  // const projectImg = props.projects.map((project) => {
  //   return <p>{`${project.id}`}</p>;
  // });

  return (
    <ul className="main__projects">
      {listProject}
      {/* {isShown && projectImg} */}
    </ul>
  );
};

export default ProjectList;
