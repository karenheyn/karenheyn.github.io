import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const toggleNavClasses = () => {
  let burgerIcon = document.getElementById("burger");
  burgerIcon.classList.toggle("is-active");
  let mobileMenu = document.getElementById("menu-container");
  mobileMenu.classList.toggle("opened");
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
          <Link to='/projects' className='link' onClick={toggleNavClasses}>
            Projects
          </Link>
        </div>
        <div className='option2'>
          <Link to='/contact' className='link' onClick={toggleNavClasses}>
            Contact
          </Link>
        </div>
        <div className='option3'>
          <Link to='/resume' className='link' onClick={toggleNavClasses}>
            Resumé
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
