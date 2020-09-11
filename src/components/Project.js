import React from 'react';

const Project = (props) => {
  return (
    <>
      <h2 className="projects__name">{props.project.name}</h2>
    </>
  );
};

export default Project;
