import React from "react";
import Card from "../card/card";
import "./projects.css";

function Projects() {
  return (
    <div className='drawer-container'>
      <div className='side-drawer'>
        <h2>Recent Projects</h2>
        <div className='projects-container'>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Projects;
