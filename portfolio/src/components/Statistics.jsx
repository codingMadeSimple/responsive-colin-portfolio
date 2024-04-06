import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';


const Statistics = () => {
  return (
    <section className="statistics" id="statistics">
      <div className="statistics-container">
        <div className="statistics-image-container">
          <a href="https://www.linkedin.com/in/colin-spangelo/"
            target="_blank"
          ><img
              src="https://media.licdn.com/dms/image/D5635AQFvLouV3noONw/profile-framedphoto-shrink_200_200/0/1711387411703?e=1712700000&v=beta&t=hweik05lns-DZcjIJWksZ_-swHpPnYQtFogtJUthxBQ"
              alt="profile-picture" />
          </a>
        </div>
        <div >
          <div className="stats-card">
            <FontAwesomeIcon icon={faStar} />
            <p >47 GitHub Repositories</p>
          </div>
          <div className="stats-card">
            <FontAwesomeIcon icon={faGithub} />
            <p >517 Commits Last Year</p>
          </div>
          <div className="stats-card">
            <FontAwesomeIcon icon={faGithub} />
            <p >68 Commits This Year</p>
          </div>
          <div className="stats-card">
            <FontAwesomeIcon icon={faArrowTrendUp} />
            <div>
              <p >Current Commit Streak: 13 Days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
