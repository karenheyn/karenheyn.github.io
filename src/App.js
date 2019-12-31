import React from "react";
import Nav from "./nav/nav";
import Projects from "./projects/projects";
import "./App.css";
import Home from "./home/home";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className='bg'>
      <main>
        <Nav></Nav>
        <Route path='/projects' exact component={Projects} />
        <Route path='/' exact component={Home} />
      </main>
    </div>
  );
}

export default App;
