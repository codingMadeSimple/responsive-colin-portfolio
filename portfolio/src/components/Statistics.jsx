import React from 'react';

const Statistics = () => {
  return (
    <section className="statistics">
      <div class="statsContainer">
        <div class="imageContainer">
          <img
            src="https://media.licdn.com/dms/image/D5635AQFvLouV3noONw/profile-framedphoto-shrink_200_200/0/1711387411703?e=1712091600&v=beta&t=dNBLyseagPNNHCCJzr1M9aS4hogpgtSixcZ9D_bU0ig"
            alt="profile-image" />
        </div>
        <div class="stats">
          <div>
            <div>
              <i class="fa-solid fa-star"></i>
            </div>
            <p class="darkerText">45 GitHub Repositories</p>
          </div>
          <div>
            <div>
              <i class="fa-brands fa-github"></i>
            </div>
            <p class="darkerText">517 Commits Last Year</p>
          </div>
          <div>
            <div>
              <i class="fa-brands fa-github"></i>
            </div>
            <p class="darkerText">59 Commits This Year</p>
          </div>
          <div>
            <div>
              <i class="fa-solid fa-arrow-trend-up"></i>
            </div>
            <div>
              <p class="darkerText">Current Commit Streak: 9 Days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
