import React from "react";
import "./about.css";
import resume from "../assets/KarenHeynResume.pdf";

function Projects() {
  return (
    <div className='paper'>
      <h1>Hello world, I'm Karen</h1>
      <p>I am a software developer </p>
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
