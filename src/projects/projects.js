import React from "react";
import "./projects.css";
function Projects() {
  return (
    <div className='drawer-container'>
      <div className='side-drawer'>
        <h2>Recent Projects</h2>
        <div className='projects-container'>
          <div className='project'>
            <h3>project1</h3>
            <img
              src='https://www.placecage.com/300/300'
              alt='whoops'
              className='project-image'
            ></img>
          </div>
          <div className='project'>
            <h3>project2</h3>
            <img
              src='https://www.placecage.com/300/300'
              alt='whoops'
              className='project-image'
            ></img>
          </div>
          <div className='project'>
            <h3>project3</h3>
            <img
              src='https://www.placecage.com/300/300'
              alt='whoops'
              className='project-image'
            ></img>
          </div>
          <div className='project'>
            <h3>project4</h3>
            <img
              src='https://www.placecage.com/300/300'
              alt='whoops'
              className='project-image'
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
