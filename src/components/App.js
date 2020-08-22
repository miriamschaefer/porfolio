import React from 'react';
import '../stylesheets/App.scss';
import FontAwesomeIcon from '/Fontawesome';

function App() {
  return (
    <main className="main background-animation">
      <h1 className="main__title">
        Hey, <span>it's Miriam!</span>
      </h1>
      <p className="main__introduction">
        Why don't you find me in my social media while I fix this?
      </p>
      <div className="main__social">
        <FontAwesomeIcon icon={['fab', 'Instagram']} />
      </div>
    </main>
  );
}

export default App;
