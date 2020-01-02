import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const toggleNavClasses = () => {
  let burgerIcon = document.getElementById("burger");
  burgerIcon.classList.toggle("is-active");
  let mobileMenu = document.getElementById("menu-container");
  mobileMenu.classList.toggle("opened");
};
const removeNavClasses = () => {
  let burgerIcon = document.getElementById("burger");
  burgerIcon.classList.remove("is-active");
  let mobileMenu = document.getElementById("menu-container");
  mobileMenu.classList.remove("opened");
};
const Nav = () => {
  return (
    <div>
      <div className='hamburger' id='burger' onClick={toggleNavClasses}>
        <div className='lines'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </div>
      <div className='menu-container' id='menu-container'>
        <div className='option1'>
          <Link to='/projects' className='link' onClick={removeNavClasses}>
            Projects
          </Link>
        </div>
        <div className='option2'>
          <Link to='/contact' className='link' onClick={removeNavClasses}>
            Contact
          </Link>
        </div>
        <div className='option3'>
          <Link to='/resume' className='link' onClick={removeNavClasses}>
            Resumé
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
