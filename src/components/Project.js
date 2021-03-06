import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {

  const [isShown, setIsShown] = useState(false);

  const { name, id, image } = props.project;
  return (
    <Link to={`/project/${id}`}>
      <li className="main__projects__item"
      key={id}
      id={id}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
        <span role="img" aria-label="sparks emoji">✨</span> {name}
        {isShown && (
          <div className="show-image">
        <img src={image} alt={name} />
        </div>
        )}
      </li>
    </Link>
  );
};

export default Project;
