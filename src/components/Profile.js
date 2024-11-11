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

        <div className="btn-container">

        <button className="btn btn-color-1" onClick={()=>window.open("https://drive.google.com/file/d/1G3UWDM7o7Z0-18FfyvkoobAOIDF_lOnS/view?usp=drivesdk")}>
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
