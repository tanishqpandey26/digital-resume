
import './App.css';

import React, { useRef } from 'react';

import {FaGithub,FaLinkedin} from "react-icons/fa";

import {TbBadgesFilled} from "react-icons/tb";

import {MdEmail} from "react-icons/md";

import {FaAward} from "react-icons/fa"

import {MdPeople} from "react-icons/md"

import {BsPatchCheckFill} from "react-icons/bs";

import profilepic from "./material/profile-pic.jpg";

import secondpic from "./material/linkedin dp edited.jpeg";

import project3 from "./material/Screenshot (5).png";

import project2 from "./material/Screenshot (6).png"




function App() {


  const [menuOpen, setMenuOpen] = React.useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  
  function scrollHandler(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
}

   
const contactSectionRef = useRef(null);
   
 


  return (
   <div className='App'>



<nav id="desktop-nav">
      <div class="logo">Tanishq Pandey</div>
      <div>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>

    <nav id="hamburger-nav">
  <div className="logo">Tanishq Pandey</div>
  <div className="hamburger-menu">
    <div className="hamburger-icon" onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className={menuOpen ? "menu-links open" : "menu-links"}>
      <li><a href="#about" onClick={toggleMenu}>About</a></li>
      <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
      <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
      <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
    </div>
  </div>
</nav>


    <section id="profile">
      <div class="section__pic-container">
        <img src={profilepic} alt='Profile p' className='profile-image' />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Tanishq Pandey</h1>
        <p class="section__text__p2">Software Engineer</p>

        <div class="btn-container">

        <button
  className="btn btn-color-2"
  onClick={() => window.open('/CV/CV_tanishqpandey.pdf')}
>
  Download CV
</button>

          <button
        className="btn btn-color-1"
        onClick={() => {
          contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }}
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
              <p>2+ years <br />Frontend Development</p>
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
    size={30}  // adjust this for the desired size
    onClick={() => scrollHandler('experience')}
/>
    </section>


    <section id="experience">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Experience</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
               <BsPatchCheckFill 
               size={30}/>
                            <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
               <BsPatchCheckFill 
               size={30}/>
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              {/* <article>
               <BsPatchCheckFill 
               size={30}/>
                <div>
                  <h3>SASS</h3>
                  <p>Intermediate</p>
                </div>
              </article> */}
              <article>
               <BsPatchCheckFill 
               size={30}/>
                <div>
                  <h3>JavaScript</h3>
                  <p>Experienced</p>
                </div>
              </article>

              <article>
               <BsPatchCheckFill 
               size={30}/>
                <div>
                  <h3>TypeScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
               <BsPatchCheckFill 
               size={30}/>
                <div>
                  <h3>React JS</h3>
                  <p>Basic</p>
                </div>
              </article>

              {/* <article>
               <BsPatchCheckFill 
               size={30}/>
                <div>
                  <h3>Material UI</h3>
                  <p>Intermediate</p>
                </div>
              </article> */}

            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Backend Development</h2>
            <div class="article-container">

              <article>
               <BsPatchCheckFill 
               size={30}/>
                <div>
                  <h3>Firebase</h3>
                  <p>Experienced</p>
                </div>
              </article>
              
              <article>
               <BsPatchCheckFill 
               size={30}/>
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
               <BsPatchCheckFill 
               size={30}/>
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
               <BsPatchCheckFill 
               size={30}/>
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <TbBadgesFilled
    className="icon arrow"
    size={30}  // adjust this for the desired size
    onClick={() => scrollHandler('projects')}
/>

    </section>
    <section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">

          {/* <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/project-1.png"
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project One</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div> */}
          
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={project3}
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project One</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={()=>window.open("https://github.com/tanishqpandey26/Cotlog-social_blog_website")}
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={()=>window.open("https://cotlog-social-blog-website.vercel.app/")}
              >
                Live Demo
              </button>
            </div>
          </div>

          
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={project2}
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project Two</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={()=>window.open("https://github.com/tanishqpandey26/digital-resume")}
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
               onClick={()=>window.open("https://digital-resume-fawn.vercel.app/")}
              >
                Live Demo
              </button>
            </div>
          </div>


        </div>
      </div>
      <TbBadgesFilled
    className="icon arrow"
    size={30}  // adjust this for the desired size
    onClick={() => scrollHandler('contact')}
/>
    </section>

    <section id="contact" ref={contactSectionRef}>
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        
        <div class="contact-info-container">
        <button
          onclick=""
          >
            <MdEmail size={30}/>
          </button>
          <p><a href="mailto:tanishqpandeyofficial@gmail.com">tanishqpandeyofficial@gmail.com</a></p>
        </div>
        
        <div className="contact-info-container">
        <button onClick={() => window.open("https://www.linkedin.com/in/pandey26tanishq/")}>
            <FaLinkedin size={30}/>
          </button>
          <p><a href="https://www.linkedin.com/in/pandey26tanishq/">LinkedIn</a></p>
        </div>
      </div>
    </section>
    <footer>
      <nav>
        <div class="nav-links-container">
          <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 Tanishq Pandey</p>
    </footer>



   </div>
  );
}

export default App;
