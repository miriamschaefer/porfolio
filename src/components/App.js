import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
import projectsFromApi from '../services/projects.json';
import ProjectList from './ProjectList';
import SocialLinks from './SocialLinks';
import About from './About';
import Header from './Header';

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsFromApi);
  }, []);
  return (
    <>
      <Header />
      <main className="main">
        <div className="wrapper">
          <About />
          <SocialLinks />
          <ProjectList projects={projectsFromApi} />
        </div>
      </main>
    </>
  );
};

export default App;
