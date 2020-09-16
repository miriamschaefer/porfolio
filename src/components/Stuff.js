import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Stuff = () => {
  return (
    <div className="main__stuff">
      <h2 className="main__stuff__title">Things that really matter</h2>

      <ul className="main__stuff__list">
        <li className="main__stuff__list__item">
          <FontAwesomeIcon
            icon={faHeart}
            className="main__stuff__list__item__icon"
          />
          I love Oasis and Bad Bunny.
        </li>
        <li className="main__stuff__list__item">
          <FontAwesomeIcon
            icon={faHeart}
            className="main__stuff__list__item__icon"
          />
          I have a dog named Croqueta.
        </li>
        <li className="main__stuff__list__item">
          <FontAwesomeIcon
            icon={faHeart}
            className="main__stuff__list__item__icon"
          />
          According to this list I keep, I've been to more than 120 concerts
          throughout my life.
        </li>
        <li className="main__stuff__list__item">
          <FontAwesomeIcon
            icon={faHeart}
            className="main__stuff__list__item__icon"
          />
          I have never broken a bone.
        </li>
        <li className="main__stuff__list__item">
          <FontAwesomeIcon
            icon={faHeart}
            className="main__stuff__list__item__icon"
          />
          I kinda miss MySpace.{' '}
        </li>
      </ul>
    </div>
  );
};

export default Stuff;
