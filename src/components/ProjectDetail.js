import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faLaptop,
  faCaretRight,
  faCaretLeft,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

const ProjectDetail = (props) => {
  const projectTags = props.tags;
  const tags = projectTags.map((tag, i) => {
    return (
      <li key={i} className="main__project__tags__item">
        {tag}
      </li>
    );
  });

  const { name, id, image, web, github, goals, about } = props;
  return (
    <main className="main">
      <section className="main__project">
        <div className="main__project__image">
          <img
            src={image}
            title={`${name} preview image`}
            alt={`${name} preview`}
          />
        </div>
        <div className="main__project__info">
          <h3>{name}</h3>
          <p>{about}</p>

          <h4>Technologies used:</h4>

          <ul className="main__project__tags">{tags}</ul>

          <div className="main__project__goals">
            <h4>Main goal:</h4>
            <p>{goals}</p>
          </div>
          <div className="main__project__links">
            <a href={github} alt="Visit Github" target="blank">
              <FontAwesomeIcon icon={faCode} className="icon" />
            </a>
            <a href={web} alt="Visit site" target="blank">
              <FontAwesomeIcon icon={faLaptop} className="icon" />
            </a>
          </div>
          <div className="main__project__navigation">
            <Link to={`/project/${id - 1}`}>
              {' '}
              <FontAwesomeIcon icon={faCaretLeft} className="icon" />
              Last project
            </Link>
            <Link to="/">
              {' '}
              <FontAwesomeIcon icon={faHome} className="icon" />
            </Link>
            <Link to={`/project/${id + 1}`}>
              Next project{' '}
              <FontAwesomeIcon icon={faCaretRight} className="icon" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
