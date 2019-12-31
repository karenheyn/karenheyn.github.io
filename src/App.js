import React from "react";
import Nav from "./nav/nav";
import Projects from "./projects/projects";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className='bg'>
      <main>
        <Nav></Nav>
        <div className='title-container'>
          <h1>Karen Heyn</h1>
          <h2>Software Developer</h2>
        </div>
      </main>
    </div>
  );
}

export default App;
