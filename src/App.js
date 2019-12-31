import React from "react";
import Nav from "./nav/nav";
import Projects from "./projects/projects";
import "./App.css";
import Home from "./home/home";
import About from "./about/about";
import Contact from "./contact/contact";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className='bg'>
      <main>
        <Nav></Nav>
        <Route path='/contact' exact component={Contact} />
        <Route path='/about' exact component={About} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/' exact component={Home} />
      </main>
    </div>
  );
}

export default App;
