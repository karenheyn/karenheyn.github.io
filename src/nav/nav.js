import React from "react";
import "./nav.css";
const Nav = () => {
  return (
    <div>
      <div className='hamburger'>
        <div className='lines'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </div>
      <div className='menu-container'>
        <div className='option1'>
          <div className='link'>projects</div>
        </div>
        <div className='option2'>
          <div className='link'>contact</div>
        </div>
        <div className='option3'>
          <div className='link'>about</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
