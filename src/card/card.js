import React from "react";
import "./card.css";
import makeupBomb from "../assets/makeup_bomb.png";
import trumpTrivia from "../assets/trump-trivia.png";
import delicious from "../assets/delicious.png";
import componentLibrary from "../assets/component-library.png";
const projects = [
  {
    name: "Makeup Bomb",
    img: makeupBomb,
    github: "https://github.com/karenheyn/MakeupBomb",
    site: "https://quizzical-goldstine-b0be04.netlify.com/"
  },
  {
    name: "Trump Trivia",
    img: trumpTrivia,
    github: "https://github.com/karenheyn/Trump-Trivia",
    site: "https://karenheyn.github.io/Trump-Trivia/"
  },
  {
    name: "DeliCious",
    img: delicious,
    github: "https://github.com/tully4school/Project8FE",
    site: "https://wizardly-bartik-6c114a.netlify.com/"
  },
  {
    name: "Component library",
    img: componentLibrary,
    github: "https://github.com/karenheyn/react-component-library",
    site:
      "https://elegant-mcclintock-aa9611.netlify.com/?path=/story/thumbnail--thumbnail-inline-large"
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
          <a href={project.github} target='_blank' rel='noopener noreferrer'>
            <i class='fa fa-github'></i>
            source code
          </a>
          <a href={project.site} target='_blank' rel='noopener noreferrer'>
            <i class='fa fa-window-maximize'></i>
            deployed version
          </a>
        </div>
      </div>
    </div>
  ));
};

export default Card;
