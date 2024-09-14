import React from 'react';
import Cotlog from "../material/Cotlog.png";
import Tripper from "../material/Tripper.png";
import {TbBadgesFilled} from "react-icons/tb";
import "./ProjectsStyles.css";

function Projects() {

  function scrollHandler(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
}


  return (
    
    <>
    
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
                src={Tripper}
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project-One</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={()=>window.open("https://github.com/tanishqpandey26/Tripper")}
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
               onClick={()=>window.open("https://tripper-ui.vercel.app/")}
              >
                Live Demo
              </button>
            </div>
          </div>

          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={Cotlog}
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project-Two</h2>
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



        </div>
      </div>

      <TbBadgesFilled
      className="icon arrow"
      size={30}  
      onClick={() => scrollHandler('contact')}
      />

    </section>
    
    </>
  )
}

export default Projects
