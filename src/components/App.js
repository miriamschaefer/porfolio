import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
import projectsFromApi from '../services/projects.json';
import ProjectList from './ProjectList';
import SocialLinks from './SocialLinks';
import About from './About';
import Skills from './Skills';
import Stuff from './Stuff';
// import Header from './Header';

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsFromApi);
  }, [projects]);

  return (
    <>
      {/* <Header /> */}
      <main className="main">
        <div className="wrapper">
          <About />
          <ProjectList projects={projectsFromApi} />
          <Skills />
          <Stuff />
          <SocialLinks />
        </div>
      </main>
    </>
  );
};

export default App;
