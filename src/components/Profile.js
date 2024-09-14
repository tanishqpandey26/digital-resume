import React from 'react';
import DigitalResumeProfilePic from "../material/DigitalResumeProfilePic.jpeg";
import {FaGithub,FaLinkedin} from "react-icons/fa";
import "./ProfileStyles.css";

function Profile({ onScrollToContact }) {
  

  return (
    
    <>
    
    <section id="profile">
      <div class="section__pic-container">
        <img src={DigitalResumeProfilePic} alt='Profile p' className='profile-image' />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Tanishq Pandey</h1>
        <p class="section__text__p2">Software Developer</p>

        <div class="btn-container">

        <button
        className="btn btn-color-1"
        onClick={() => window.open('/CV_tanishqpandey.pdf', '_blank')}
        >
        Resume
        </button>

        <button
        className="btn btn-color-2"
        onClick={onScrollToContact}
        >
        Contact Info
        </button>

        </div>
        <div id="socials-container">

          <button className="btn btn-color-1" onClick={()=>window.open("https://www.linkedin.com/in/pandey26tanishq/")}>
            <FaLinkedin size={20}/>
          </button>

          <button className="btn btn-color-1" onClick={()=>window.open("https://github.com/tanishqpandey26")} >
            <FaGithub size={20}/>
          </button>

        </div>
      </div>
    </section>
    
    </>
  )
}

export default Profile
