import React from 'react';
import '../scss/App.scss';

const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <h2 className="container d-flex justify-content-center">Skills</h2>
      <ul>
        <li><strong>Languages:</strong> JavaScript, Ruby, CSS, HTML</li>
        <li><strong>Testing:</strong> Cypress, Jest, Mocha, Chai, Rspec</li>
        <li><strong>Frameworks, API's & Libraries:</strong> ReactJS, NodeJS, SASS, Bootstrap, Material-UI, jQuery, AJAX, EJS, Express, Rails,  Stripe, Twilio</li>
        <li><strong>Systems, CMS, and Databases:</strong> SQL, PostgreSQL, Elephantsql, Git</li>
      </ul>
    </section>
  );
};

export default Skills;