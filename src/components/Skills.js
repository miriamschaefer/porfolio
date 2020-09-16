import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <div className="main__skills">
      <h2 className="main__skills__title">Skills</h2>

      <ul className="main__skills__list">
        <li className="main__skills__list__item">
          HTML5{' '}
          <FontAwesomeIcon
            icon={faSmile}
            className="main__skills__list__item__smiley"
          />
        </li>
        <li className="main__skills__list__item">
          Javascript{' '}
          <FontAwesomeIcon
            icon={faSmile}
            className="main__skills__list__item__smiley"
          />
        </li>
        <li className="main__skills__list__item">
          React
          <FontAwesomeIcon
            icon={faSmile}
            className="main__skills__list__item__smiley"
          />
        </li>
        <li className="main__skills__list__item">
          CSS3
          <FontAwesomeIcon
            icon={faSmile}
            className="main__skills__list__item__smiley"
          />
        </li>
        <li className="main__skills__list__item">
          SASS
          <FontAwesomeIcon
            icon={faSmile}
            className="main__skills__list__item__smiley"
          />
        </li>
        <li className="main__skills__list__item">
          GULP
          <FontAwesomeIcon
            icon={faSmile}
            className="main__skills__list__item__smiley"
          />
        </li>
        <li className="main__skills__list__item">
          Git
          <FontAwesomeIcon
            icon={faSmile}
            className="main__skills__list__item__smiley"
          />
        </li>
        <li className="main__skills__list__item">
          I make reeeally good playlists
          <FontAwesomeIcon
            icon={faSmile}
            className="main__skills__list__item__smiley"
          />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
