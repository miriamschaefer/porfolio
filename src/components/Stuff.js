import React from 'react';
import heart from '../images/emoji-heart.png';
import Fade from 'react-reveal/Fade';

const Stuff = () => {
  return (
    <Fade left>
      <section className="main__stuff">
        <h2 className="main__stuff__title">Things that really matter</h2>

        <ul className="main__stuff__list">
          <li className="main__stuff__list__item">
            <div className="main__stuff__list__item__icon">
              <img src={heart} alt="emoji" />
            </div>
            <p>I love Oasis and Bad Bunny</p>
          </li>
          <li className="main__stuff__list__item">
            <div className="main__stuff__list__item__icon">
              <img src={heart} alt="emoji" />
            </div>
            <p>I have a dog named Croqueta</p>
          </li>
          <li className="main__stuff__list__item">
            <div className="main__stuff__list__item__icon">
              <img src={heart} alt="emoji" />
            </div>
            <p>
              According to this list I keep, I've been to more than 120 concerts
              throughout my life
            </p>
          </li>
          <li className="main__stuff__list__item">
            <div className="main__stuff__list__item__icon">
              <img src={heart} alt="emoji" />
            </div>
            <p>I have never broken a bone</p>
          </li>
          <li className="main__stuff__list__item">
            <div className="main__stuff__list__item__icon">
              <img src={heart} alt="emoji" />
            </div>
            <p>I kinda miss Myspace</p>
          </li>

          <li className="main__stuff__list__item">
            <div className="main__stuff__list__item__icon">
              <img src={heart} alt="emoji" />
            </div>
            <p>
              I make reeeeally good{' '}
              <a
                href="https://open.spotify.com/user/eme_x?si=wzjkxOwfSI2b30YwTkr2RA"
                alt="Spotify profile"
              >
                playlists
              </a>
            </p>
          </li>
        </ul>
      </section>
    </Fade>
  );
};

export default Stuff;
