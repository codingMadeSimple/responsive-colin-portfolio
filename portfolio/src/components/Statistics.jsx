import React from 'react';

const Statistics = () => {
  return (
    <section className="statistics" id="statistics">
      <div className="stats-container">
        <div className="stats-image-container">
          <a href="https://www.linkedin.com/in/colin-spangelo/"
          target="_blank"
          ><img
            src="https://media.licdn.com/dms/image/D5635AQFvLouV3noONw/profile-framedphoto-shrink_200_200/0/1711387411703?e=1712700000&v=beta&t=hweik05lns-DZcjIJWksZ_-swHpPnYQtFogtJUthxBQ"
            alt="profile-picture" />
          </a>
        </div>
        <div className="stats">
          <div>
            <div>
              <i className="fa-solid fa-star"></i>
            </div>
            <p >47 GitHub Repositories</p>
          </div>
          <div>
            <div>
              <i className="fa-brands fa-github"></i>
            </div>
            <p >517 Commits Last Year</p>
          </div>
          <div>
            <div>
              <i className="fa-brands fa-github"></i>
            </div>
            <p >60 Commits This Year</p>
          </div>
          <div>
            <div>
              <i className="fa-solid fa-arrow-trend-up"></i>
            </div>
            <div>
              <p >Current Commit Streak: 9 Days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
