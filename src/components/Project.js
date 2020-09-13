import React from 'react';

const Project = (props) => {
  const { name } = props.project;
  return (
    <>
      <h2 className="main__projects__item__name">{name}</h2>
    </>
  );
};

export default Project;
