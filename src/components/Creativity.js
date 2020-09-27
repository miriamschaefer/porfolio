import React from 'react';
import emoji from '../images/emoji-ribbon.png';
import Fade from 'react-reveal/Fade';

const Creativity = () => {
  return (
    <Fade left>
      <section className="main__creativity">
        <h2 className="main__creativity__title">...half creative</h2>

        <ul className="main__creativity__list">
          <li className="main__creativity__list__item">
            <div className="main__creativity__list__item__text">
              <p>Photoshop</p>
            </div>
            <div className="main__creativity__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
          <li className="main__creativity__list__item">
            <div className="main__creativity__list__item__text">
              <p>Lightroom</p>
            </div>
            <div className="main__creativity__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
          <li className="main__creativity__list__item">
            <div className="main__creativity__list__item__text">
              <p>Final Cut</p>
            </div>
            <div className="main__creativity__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
          <li className="main__creativity__list__item">
            <div className="main__creativity__list__item__text">
              <p>Zeplin</p>
            </div>
            <div className="main__creativity__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
          <li className="main__creativity__list__item">
            <div className="main__creativity__list__item__text">
              <p>Figma</p>
            </div>
            <div className="main__creativity__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
          <li className="main__creativity__list__item">
            <div className="main__creativity__list__item__text">
              <p>'Let's try this in another color'</p>
            </div>
            <div className="main__creativity__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
        </ul>
      </section>
    </Fade>
  );
};

export default Creativity;
