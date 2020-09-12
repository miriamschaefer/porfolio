import React, { useState } from 'react';

const Project = (props) => {
  const [isShown, setIsShown] = useState(false);
  const { name, image } = props.project;
  return (
    <>
      <h2
        className="projects__name"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {name}
      </h2>

      {isShown && <img src={image} alt={name} className="" />}
    </>
  );
};

export default Project;
