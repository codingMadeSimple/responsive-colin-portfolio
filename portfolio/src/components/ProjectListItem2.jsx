import React from 'react';
import '../scss/App.scss';

const ProjectListItem2 = (props) => {

  const projectObject = props.projectObject;
  console.log(projectObject[0]);

  return (
    <section className="project-list-item-2-container" id="project-list-item-2">
      <div class="row row-cols-1 row-cols-md-3 g-4 w-75 d-flex justify-content-center shadow p-3 mb-5 bg-body rounded">
        <div class="col ">
          <div class="card h-100">
            <img src={projectObject[0].projectScreenshot} class="" alt="..." />
            <div class="card-body">
              <h4 class="card-title text-center">{projectObject[0].projectName}</h4>
              <p class="card-text">{projectObject[0].projectDescription}</p>
            </div>
            <div class="card-footer">
              <h5 className="project-key-take-aways">Key takeaways:</h5>
              <li>Ensure good consistent communication </li>
              <li>Set up daily check-ins</li>
              <li>Read partners code to make ensure coding styles and conventions stay consistent</li>
              <small class="text-body-secondary">Completed: October 13, 2023</small>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src="https://github.com/codingMadeSimple/jungle/raw/master/docs/UserLoggedIn.png?raw=true" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Jungle</h5>
              <p class="card-text">Jungle is an e-commerce application for purchasing plants which was built to learn Ruby and Rails. It's
                stack includes; JavaScript, Ruby, Rails, Bootstrap, SASS, PostgreSQL, Stripe and testing with Cypress and
                RSpec</p>
            </div>
            <div class="card-footer ">
              <h5 className="project-key-take-aways">Key takeaways:</h5>
              <li>Learned MVC architecture</li>
              <li>Object Oriented Programming</li>
              <li>Learned about schemas</li>
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="https://github.com/codingMadeSimple/lastPhotoLabs/raw/master/docs/SelectedTopicPhotos.png?raw=true" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Photolabs</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div class="card-footer h-25 d-inline-block">
              <h5 className="project-key-take-aways">Key takeaways:</h5>
              <li>Learned React</li>
              <li>Learned all about state</li>
              <li>Was introduced to a number of hooks</li>
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectListItem2;