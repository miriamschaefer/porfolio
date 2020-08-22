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
        Why don't you find me in my social media while I fix this?
      </p>
      <ul className="main__social">
        <li className="main__social__github">
          <a href="http://www.github.com/miriamschaefer" alt="Visit my Github">
            Github
          </a>
        </li>
        <li className="main__social__instagram">
          <a
            href="http://www.instagram.com/miriamschaefer"
            alt="Visit my Instagram"
          >
            Instagram
          </a>
        </li>
        <li className="main__social__twitter">
          <a
            href="http://www.twitter.com/miriam_schaefer"
            alt="Visit my Twitter"
          >
            Twitter
          </a>
        </li>
        <li className="main__social__email">
          <a href="mailto:msuarezmelian@gmail.com" alt="Email me">
            Email me
          </a>
        </li>
      </ul>
    </main>
  );
}

export default App;
