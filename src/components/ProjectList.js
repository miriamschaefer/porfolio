import React from 'react';
import Fade from 'react-reveal/Fade';
import Project from './Project';

const ProjectList = (props) => {

  const listProject = props.projects.map((project) => {
    return (
    
      <Project project={project} key={project.id} />
    );
  });

  return (
    <Fade left>
      <h2 className="main__subtitle">Projects</h2>

      <ul className="main__projects ">
        {listProject}
      </ul>
    </Fade>
  );
};

export default ProjectList;
