import React from 'react';

const About = () => {
  return (
    <div className="main__about">
      <h1 className="main__about__title">
        Hey, <span>it's Miriam!</span>
      </h1>

      <p className="main__about__introduction">
        I'm a creative being, born and raised in the Canary Islands (Spain).
        When I was 17, I moved to Madrid to pursue a career in digital media.
        After some years as a{' '}
        <a
          href="http://www.instagram.com/miriamschaefer"
          alt="Visit my Instagram"
          title="Visit my instagram"
          target="blank"
        >
          photographer
        </a>{' '}
        and social media manager of different e-commerces, I decided to start
        coding and begin a career in Front-End Development.
      </p>
    </div>
  );
};

export default About;
