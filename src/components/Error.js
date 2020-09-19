import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Error = () => {
  return (
    <div className="main__error">
      <h3 className="main__error__title">There's nothing here, darling.</h3>
      <Link to="/">
        <div className="error__img">
          Go home, babe.
          <FontAwesomeIcon icon={faHome} />
        </div>
      </Link>
    </div>
  );
};

export default Error;
