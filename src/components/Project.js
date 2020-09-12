import React, { useState } from 'react';

const Project = (props) => {
  const [isShown, setIsShown] = useState(false);
  const { name, image } = props.project;
  return (
    <>
      <h2
        className="main__projects__item__name"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {name}
      </h2>

      {isShown && (
        <div className="main__projects__item__img">
          <img src={image} alt={name} />
        </div>
      )}
    </>
  );
};

export default Project;
