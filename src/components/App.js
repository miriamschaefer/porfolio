import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../stylesheets/App.scss';
import projectsFromApi from '../services/projects.json';
import ProjectList from './ProjectList';
import SocialLinks from './SocialLinks';
import About from './About';
import Skills from './Skills';
import Stuff from './Stuff';
import ProjectDetail from './ProjectDetail';
import Error from './Error';
// import Header from './Header';

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsFromApi);
  }, [projects]);

  const getMain = () => {
    return (
      <main className="main wrapper">
        <About />
        <ProjectList projects={projectsFromApi} />
        <Skills />
        <Stuff />
        <SocialLinks />
      </main>
    );
  };

  function renderProject(props) {
    const routeId = props.match.params.id;
    const project = projects.find(
      (project) => project.id === parseInt(routeId)
    );

    if (project) {
      return (
        <ProjectDetail
          id={project.id}
          name={project.name}
          github={project.github}
          web={project.web}
          image={project.image}
          about={project.about}
          tags={project.tags}
          goals={project.goals}
          mockup={project.mockup}
        />
      );
    } else {
      return <Error />;
    }
  }

  return (
    <React.Fragment>
      {/* <Header /> */}

      <Switch>
        <Route exact path="/">
          {getMain}
        </Route>

        <Route exact path="/project/:id" render={renderProject} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
