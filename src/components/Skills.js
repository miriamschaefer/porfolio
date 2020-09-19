import React from 'react';
import emoji from '../images/emoji-skills.png';
import Fade from 'react-reveal/Fade';

const Skills = () => {
  return (
    <Fade right>
      <div className="main__skills">
        <h2 className="main__skills__title">Skills</h2>

        <ul className="main__skills__list">
          <li className="main__skills__list__item">
            <p>Javascript</p>
            <div className="main__skills__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
          <li className="main__skills__list__item">
            <p>React</p>
            <div className="main__skills__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
          <li className="main__skills__list__item">
            <p>HTML5</p>
            <div className="main__skills__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
          <li className="main__skills__list__item">
            <p>CSS3</p>
            <div className="main__skills__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
          <li className="main__skills__list__item">
            <p>SASS</p>
            <div className="main__skills__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
          <li className="main__skills__list__item">
            <p>GULP</p>
            <div className="main__skills__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
          <li className="main__skills__list__item">
            <p>Git</p>
            <div className="main__skills__list__item__smiley">
              <img src={emoji} alt="emoji" />
            </div>
          </li>
        </ul>
      </div>
    </Fade>
  );
};

export default Skills;
