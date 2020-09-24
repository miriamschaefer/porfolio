import React from 'react';
import Fade from 'react-reveal/Fade';
import Project from './Project';

const ProjectList = (props) => {
  // const [isShown, setIsShown] = useState(false);

  const listProject = props.projects.map((project) => {
    return (
      // onMouseEnter={() => setIsShown(true)}
      // onMouseLeave={() => setIsShown(false)}
      <Project project={project} key={project.id} />
    );
  });

  // const projectImg = props.projects.map((project) => {
  //   return <p>{`${project.id}`}</p>;
  // });

  return (
    <Fade left>
      <h2 className="main__subtitle">Projects</h2>

      <ul className="main__projects ">
        {listProject}
        {/* {isShown && projectImg} */}
      </ul>
    </Fade>
  );
};

export default ProjectList;
