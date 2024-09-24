import React from 'react';
import {FaAward} from "react-icons/fa"
import {MdPeople} from "react-icons/md";
import secondpic from "../material/linkedin-dp-edited.jpeg";
import {TbBadgesFilled} from "react-icons/tb";
import "./AboutMeStyles.css";

function AboutMe() {

  function scrollHandler(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
}

  return (
   <>
    <section id="about" >
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-container">
          <img
            src={secondpic}
            alt="Profile pp"
            class="about-pic"
          />
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
             <FaAward
             size={30}/>
              <h3>Experience</h3>
              <p>2+ years <br />Web Development</p>
            </div>
            <div class="details-container">
            <MdPeople
            size={30}
            />
              <h3>Education</h3>
              <p>B.TECH <br />Computer Engineering</p>
            </div>
          </div>
          <div class="text-container">
            <p>
            As a passionate Computer Engineering student, I'm deeply immersed in the world of software and web development. I believe in leveraging technology to craft solutions that enhance user experience and streamline processes. 
With a solid foundation in coding and software design principles, I'm eager to collaborate on projects that push boundaries and embrace innovation. I continuously strive to upgrade my skills and stay updated with the latest industry trends, looking forward to connecting with like-minded professionals and exploring opportunities that challenge and grow my expertise in the tech realm.
            </p>
          </div>
        </div>
      </div>
      <TbBadgesFilled
    className="icon arrow"
    size={30}  
    onClick={() => scrollHandler('experience')}
/>
    </section>
    </>
  )
}

export default AboutMe;
