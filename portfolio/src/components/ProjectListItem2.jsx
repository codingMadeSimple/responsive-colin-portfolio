import React from 'react';
import '../scss/App.scss';

const ProjectListItem2 = (props) => {

  const projectObject = props.projectObject;
  console.log(projectObject[0]);

  return (
    <section className="project-list-item-2-container" id="project-list-item-2">
      <div class="row row-cols-1 row-cols-md-3 g-4 w-75 d-flex justify-content-center">
        <div class="col">
          <div class="card h-100">
          <img src={projectObject[0].projectScreenshot} class="card-img-top" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">{projectObject[0].projectName}</h5>
              <p class="card-text">{projectObject[0].projectDescription}</p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">Completed: October 13, 2023</small>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">Last updated 3 mins ago</small>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">Last updated 3 mins ago</small>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectListItem2;