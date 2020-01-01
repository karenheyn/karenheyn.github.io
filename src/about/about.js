import React from "react";
import "./about.css";
import resume from "../assets/KarenHeynResume.pdf";

function Projects() {
  return (
    <div>
      <h1>Hello world, I'm Karen</h1>
      <a href={resume} target='_blank' rel='noopener noreferrer'>
        Resumè
      </a>
    </div>
  );
}

export default Projects;
