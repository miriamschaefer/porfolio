import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

class SocialLinks extends Component {
  render() {
    return (
      <section className="social">
        <p>So, let's talk!</p>
        <a
          href="mailto:msuarezmelian@gmail.com"
          alt="Email me!"
          className="social__email styled-link"
        >
          msuarezmelian@gmail.com
        </a>
        <div className="social__icons">
          <a
            href="http://www.github.com/miriamschaefer"
            title="Visit my Github profile"
            target="_blank"
            rel="noopener noreferrer"
            className="social__icons__icon"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="http://www.linkedin.com/in/msuarezmelian"
            title="Visit my Linkedin profile"
            target="_blank"
            rel="noopener noreferrer"
            className="social__icons__icon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="http://www.twitter.com/miriam_schaefer"
            title="Visit my Twitter profile"
            target="_blank"
            rel="noopener noreferrer"
            className="social__icons__icon"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="http://www.instagram.com/miriamschaefer"
            title="Visit my Intagram profile"
            target="_blank"
            rel="noopener noreferrer"
            className="social__icons__icon"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </section>
    );
  }
}

export default SocialLinks;
