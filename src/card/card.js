import React from "react";
import "./card.css";
const projects = [
  {
    name: "project 1",
    img: "https://www.placecage.com/300/300"
  },
  {
    name: "project 2",
    img: "https://www.placecage.com/300/300"
  },
  {
    name: "project 3",
    img: "https://www.placecage.com/300/300"
  },
  {
    name: "project 4",
    img: "https://www.placecage.com/300/300"
  }
];
const Card = () => {
  return projects.map(project => (
    <div className='card-container'>
      <div className='card'>
        <div className='image-box'>
          <img src={project.img} alt='whoops' className='project-image'></img>
        </div>
        <div className='content'>
          <h3>{project.name}</h3>
          <a href='https://www.w3schools.com'>
            <i class='fa fa-github'></i>
            source code
          </a>
          <a href='https://www.w3schools.com'>
            <i class='fa fa-window-maximize'></i>
            deployed version
          </a>
        </div>
      </div>
    </div>
  ));
};

export default Card;
