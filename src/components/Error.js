import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="main__error">
      <h3 className="main__error__title">There's nothing here, darling.</h3>
      <Link to="/">
        <div className="error__img">return</div>
      </Link>
    </div>
  );
};

export default Error;
