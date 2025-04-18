import React from 'react';
import DigitalResumeProfilePic from "../material/DigitalResumeProfilePic.jpeg";
import {FaGithub,FaLinkedin} from "react-icons/fa";
import "./ProfileStyles.css";

function Profile({ onScrollToContact }) {
  

  return (
    
    <>
    
    <section id="profile">
      <div className="section__pic-container">
        <img src={DigitalResumeProfilePic} alt='Profile p' className='profile-image' />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Tanishq Pandey</h1>
        <p className="section__text__p2">Software Engineer</p>
        <p className="about-description">
          I am a versatile software engineer well versed with frontend and backend technologies,
          specializing in TypeScript, React, Next.js, React Native, Express, and Node.js,
          building robust and scalable applications.
        </p>
        <div className="btn-container">

        <button className="btn btn-color-1" onClick={()=>window.open("https://drive.google.com/file/d/13tZDdhy_r1GkML8f3Fza7HY5pPDSUO7j/view?usp=drive_link")}>
        Resume
        </button>

        <button
        className="btn btn-color-1"
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
