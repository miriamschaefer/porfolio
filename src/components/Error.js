import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Error = () => {
  return (
    <section className="main__error">
      <div className="main__error__container">
        <h3 className="main__error__title">There's nothing here, darling.</h3>
        <Link to="/">
          <div className="main__error__container__link">
            <p>Go home</p>
            <FontAwesomeIcon icon={faHome} className="main__error__icon" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Error;
