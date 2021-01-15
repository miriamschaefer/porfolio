import React from 'react';

const Introduction = () => {
  return (
    <div className="main__about">
      <h1 className="main__about__title">
        Hey, <span>it's Miriam!</span>
      </h1>

      <p className="main__about__introduction">
        I'm a creative being, born and raised in the Canary Islands (Spain).
        I'm based in Madrid where I started my career as a {' '}
        <a
          href="http://www.instagram.com/miriamschaefer"
          alt="Visit my Instagram"
          title="Visit my instagram"
          target="blank"
          className="styled-link"
        >
          photographer
        </a>{' '}
        and social media manager of different e-commerces. Some time ago, I decided to start
        coding and begin a career in Frontend Development.
      </p>
    </div>
  );
};

export default Introduction;
