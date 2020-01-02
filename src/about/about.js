import React from "react";
import "./about.css";
import resume from "../assets/KarenHeynResume.pdf";

function Projects() {
  return (
    <div className='paper'>
      <h1>Hello world, I'm Karen</h1>
      <br />
      <p>
        I am a full-stack developer that loves building clean, mobile-friendly
        UIs, and backends to power them. I have a passion for learning and am
        always planning out my next project & teaching myself new technologies.
        <br />
        <br /> Before I learned how to code at General Assembly, I studied
        philosophy at Penn State while working as a Bartender and Field
        Marketing Specialist. I graduated cum laude December 2017 and spent most
        of 2018 backpacking through Europe.
        <br />
        <br />
        When i'm not coding, you will likely find me in the kitchen trying new
        recipes.
        <br />
        <br />
      </p>
      <h2>
        view and download my resumé
        <a href={resume} target='_blank' rel='noopener noreferrer'>
          here
        </a>
      </h2>
    </div>
  );
}

export default Projects;
