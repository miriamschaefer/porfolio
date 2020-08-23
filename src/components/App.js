import React from 'react';
import '../stylesheets/App.scss';
// import FontAwesomeIcon from '/Fontawesome';

function App() {
  return (
    <main className="main background-animation">
      <h1 className="main__title">
        Hey, <span>it's Miriam!</span>
      </h1>
      <p className="main__introduction">
        I'm a photographer turned into a front-end developer. While I work on
        this... Why don't you check my projects in my{' '}
        <a href="http://www.github.com/miriamschaefer" alt="Visit my Github">
          Github
        </a>{' '}
        profile, or my work as a photographer in my{' '}
        <a
          href="http://www.instagram.com/miriamschaefer"
          alt="Visit my Instagram"
        >
          Instagram
        </a>{' '}
        account. Also, I talk nonsense on{' '}
        <a href="http://www.twitter.com/miriam_schaefer" alt="Visit my Twitter">
          Twitter
        </a>
        , but if you wanna get in touch, just{' '}
        <a href="mailto:msuarezmelian@gmail.com" alt="Email me">
          email me
        </a>
        !
      </p>
    </main>
  );
}

export default App;
