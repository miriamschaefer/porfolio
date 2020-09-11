import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
import projectsFromApi from '../services/projects.json';
import ProjectList from './ProjectList';
import SocialLinks from './SocialLinks';

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsFromApi);
  }, []);
  return (
    <main className="main background-animation">
      <h1 className="main__title">
        Hey, <span>it's</span> <span>Miriam!</span>
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
      <SocialLinks />
      <ProjectList projects={projectsFromApi} />
    </main>
  );
};

export default App;
