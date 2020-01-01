import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div>
      <div className='links'>
        <a
          href='mailto:karenheyn@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i class='fa fa-envelope'></i>Email me
        </a>
        <a
          href='https://www.linkedin.com/in/karenheyn/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i class='fa fa-linkedin'></i> Connect on linkedin
        </a>
      </div>
    </div>
  );
}

export default Contact;
