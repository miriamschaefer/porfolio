import React from 'react';
import heart from '../images/emoji-heart.png';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import TextLoop from 'react-text-loop';

const Stuff = () => {
  return (
    <Fade right>
      <section className="main__stuff">
        <h2 className="main__stuff__title">Things that really matter</h2>
        <div className="main__stuff__phrase">
          <div className="main__stuff__phrase__icon">
            <img src={heart} alt="emoji" />
          </div>
          <TextLoop>
            <span>I love Oasis and Bad Bunny</span>
            <span>I have a dog named Croqueta</span>
            <span>I kinda miss Myspace</span>
            <span>I have never broken a bone</span>
            <span>I have a 400+ hour island on Animal Crossing</span>
          </TextLoop>
        </div>
        {/* <Link to="/about">
          <span className="main__stuff__phrase__link">Wanna know more?</span>
        </Link> */}
      </section>
    </Fade>
  );
};
export default Stuff;
