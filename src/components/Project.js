import React from 'react';

const Project = (props) => {
  const { name } = props.project;
  return (
    <>
      <h3 className="main__projects__item__name">{name}</h3>
    </>
  );
};

export default Project;
