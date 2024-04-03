import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../scss/App.scss';

const Footer = () => {
  return (
    <footer id="socials">
      <div className="container d-flex justify-content-center">
        <div className="justify-content-center social-padding">
          <div className="">
            <ul className="social-icons">
              <li><a href="https://github.com/codingMadeSimple" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{fontSize: '36px'}} /></a></li>
              <li><a href="https://www.linkedin.com/in/colin-spangelo/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: '36px'}} /></a></li>
            </ul>
          </div>
          <div>
            <p>&copy; {new Date().getFullYear()} Help Colin Get a Job Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;