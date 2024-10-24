import React from 'react';
import Cotlog from "../material/Cotlog.png";
import Tripper from "../material/Tripper.png";
import "./ProjectsStyles.css";

function Projects() {
  
  return (
    <>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="projects-container">
          
          <div className="project-card">
            <div className="project-img-container">
              <img src={Tripper} alt="Project 2" className="project-img" />
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://github.com/tanishqpandey26/Tripper")}
                >
                  View Code
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://tripper-ui.vercel.app/")}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="project-description">
              <h2 className="project-title">Project-One : Tripper</h2>
              <p className="project-text"> 1. Tripper is a comprehensive trip planning platform designed to streamline the travel experience for both casual tourists and adventure seekers. <br/>
              2. The platform aims to enhance the travel journey by providing all-in-one trip management tools, fostering a community of travel enthusiasts, and ensuring seamless collaboration between travel companions.</p>
            </div>
          </div>

          
          <div className="project-card">
            <div className="project-img-container">
              <img src={Cotlog} alt="Project 3" className="project-img" />
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://github.com/tanishqpandey26/Cotlog-social_blog_website")}
                >
                  View Code
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://cotlog-social-blog-website.vercel.app/")}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="project-description">
              <h2 className="project-title">Project-Two : Cotlog</h2>
              <p className="project-text">1. CotLog is a social blogging platform designed to empower students and education seekers by providing authentic, firsthand reviews of colleges, universities, and academic courses. <br/>
              2. The platform fosters a vibrant community where users can connect, share personal experiences, and exchange insights to help others navigate the complex world of higher education.</p>
            </div>
          </div>

        </div>

        
      </section>
    </>
  );
}

export default Projects;
