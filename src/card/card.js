import React from "react";
import "./card.css";
import makeupBomb from "../assets/makeup_bomb.png";
// import trumpTrivia from "../assets/trump-trivia.png";
import delicious from "../assets/delicious.png";
import betterBackstories from "../assets/better_backstories.png";
import componentLibrary from "../assets/component-library.png";
import makeupAPI from "../assets/Json_data.png";
import formValidator from "../assets/form_validator.png";
import unsplashSearch from "../assets/unsplash-search.png";
import cotripper from "../assets/cotripper.png";

const projects = [
  {
    name: "Better Backstories",
    img: betterBackstories,
    github: "https://github.com/karenheyn/better-backstories",
    site: "https://betterbackstories.com/",
  },
  {
    name: "Unsplash Image Search",
    img: unsplashSearch,
    github: "https://github.com/karenheyn/unsplash-image-search",
    site: "https://xenodochial-heisenberg-163f30.netlify.app/",
  },
  {
    name: "Cotripper App",
    img: cotripper,
    github: "https://github.com/CotripperPlatform/CoTrip",
    site: "https://cotripper.netlify.app/home",
  },
  // {
  //   name: "Trump Trivia",
  //   img: trumpTrivia,
  //   github: "https://github.com/karenheyn/Trump-Trivia",
  //   site: "https://karenheyn.github.io/Trump-Trivia/",
  // },
  {
    name: "DeliCious",
    img: delicious,
    github: "https://github.com/tully4school/Project8FE",
    site: "https://wizardly-bartik-6c114a.netlify.com/",
  },
  {
    name: "Component library",
    img: componentLibrary,
    github: "https://github.com/karenheyn/react-component-library",
    site:
      "https://elegant-mcclintock-aa9611.netlify.com/?path=/story/thumbnail--thumbnail-inline-large",
  },
  {
    name: "MakeupInfo API",
    img: makeupAPI,
    github: "https://github.com/karenheyn/MakeupAPI",
    site: "https://makeupinfo.herokuapp.com/product",
  },
  {
    name: "Makeup Bomb",
    img: makeupBomb,
    github: "https://github.com/karenheyn/MakeupBomb",
    site: "https://quizzical-goldstine-b0be04.netlify.com/",
  },
  {
    name: "React form validator",
    img: formValidator,
    github: "https://github.com/karenheyn/form-validation-react",
    site: "https://condescending-bartik-65ba64.netlify.com/",
  },
];
const Card = () => {
  return projects.map((project) => (
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
