import React from 'react';
import Project from './Project';

const ProjectList = (props) => {
  const listProject = props.projects.map((project) => {
    return (
      <li key={project.id} id={project.id}>
        <div
          onMouseOver={(ev) =>
            (ev.currentTarget.style = `'background-image: url(${project.image})'`)
          }
          onMouseOut={(ev) =>
            (ev.currentTarget.style = 'background-image: none')
          }
        >
          <Project project={project} />
        </div>
      </li>
    );
  });

  return <ul className="projects">{listProject}</ul>;
};

export default ProjectList;
