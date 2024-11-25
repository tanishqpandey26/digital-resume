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
              <p className="project-text"> 1.Tripper: Trip planning website created using React.js, Node.js, Express.js, MongoDB, JavaScript. <br/>
              2. Provides itinerary management, itinerary sharing, track expenses and share plans. <br/>
              </p>
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
              <p className="project-text">1. Cotlog: Social blogging website created using React.js, JavaScript and Firebase. <br/>
             2. Provides a platform for students, colleagues to share course overview and feedback</p>
            </div>
          </div>

        </div>

        
      </section>
    </>
  );
}

export default Projects;
