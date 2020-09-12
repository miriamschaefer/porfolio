import React, { useState } from 'react';

const Project = (props) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <h2
        className="projects__name"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {props.project.name}
      </h2>

      {isShown && <img src={props.project.image} alt="holi" />}
    </div>
  );
};

export default Project;
