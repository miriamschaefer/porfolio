import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {
  const { name, id } = props.project;
  return (
    <Link to={`/project/${id}`}>
      <li className="main__projects__item" key={id} id={id}>
        {name}
      </li>
    </Link>
  );
};

export default Project;
