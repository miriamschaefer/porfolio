import React from 'react';

const Project = (props) => {
  const { name, github } = props.project;
  return (
    <>
      <a href={github} target="blank" alt="Visit Github repository">
        <h3 className="main__projects__item__name">{name}</h3>
      </a>
    </>
  );
};

export default Project;
