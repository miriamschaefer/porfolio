import React from 'react';
import emoji from '../images/emoji-skills.png';
import Fade from 'react-reveal/Fade';

const Skills = () => {
  return (
    <Fade right>
      <section className="main__skills">
        <h2 className="main__skills__title">Half Coder...</h2>

        <ul className="main__skills__list">
          <li className="main__skills__list__item">
            <div className="main__skills__list__item__text">
              <p>Javascript</p>
            </div>
            <div className="main__skills__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
          <li className="main__skills__list__item">
            <div className="main__skills__list__item__text">
              <p>React</p>
            </div>
            <div className="main__skills__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
          <li className="main__skills__list__item">
            <div className="main__skills__list__item__text">
              <p>HTML5</p>
            </div>
            <div className="main__skills__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
          <li className="main__skills__list__item">
            <div className="main__skills__list__item__text">
              <p>CSS3</p>
            </div>
            <div className="main__skills__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
          <li className="main__skills__list__item">
            <div className="main__skills__list__item__text">
              <p>SASS</p>
            </div>
            <div className="main__skills__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
          <li className="main__skills__list__item">
            <div className="main__skills__list__item__text">
              <p>GULP</p>
            </div>
            <div className="main__skills__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
          <li className="main__skills__list__item">
            <div className="main__skills__list__item__text">
              <p>Git</p>
            </div>
            <div className="main__skills__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
          <li className="main__skills__list__item">
            <div className="main__skills__list__item__text">
              <p>Saying: 'I swear this worked before'</p>
            </div>
            <div className="main__skills__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
        </ul>
      </section>
    </Fade>
  );
};

export default Skills;
