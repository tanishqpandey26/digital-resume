import React from 'react';
import Cotlog from "../material/Cotlog.png";
import Tripper from "../material/Tripper.png";
import { TbBadgesFilled } from "react-icons/tb";
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
                  Github
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
              <p className="project-text"> Tripper is a comprehensive trip planning platform designed to streamline the travel experience for both casual tourists and adventure seekers. With Tripper, users can effortlessly create, manage, and share personalized travel itineraries, track expenses, and share their experiences with fellow travelers. The platform aims to enhance the travel journey by providing all-in-one trip management tools, fostering a community of travel enthusiasts, and ensuring seamless collaboration between travel companions.</p>
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
                  Github
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
              <p className="project-text">CotLog is a social blogging platform designed to empower students and education seekers by providing authentic, firsthand reviews of colleges, universities, and academic courses. Whether you're a high school graduate planning your undergraduate studies, considering postgraduate opportunities, or exploring new fields of learning, CotLog serves as a valuable resource to guide you in making informed academic decisions. Our platform fosters a vibrant community where users can connect, share personal experiences, and exchange insights to help others navigate the complex world of higher education.</p>
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
  );
}

export default Projects;
