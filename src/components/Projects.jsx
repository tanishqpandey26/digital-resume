import React from 'react';
import Cotlog from "../material/Cotlog.png";
import Tripper from "../material/Tripper.png";
import Medmind from "../material/medmind.jpeg";
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
              <p className="project-text">
1. Built a comprehensive trip planning website using React.js for the frontend and Node.js, Express.js,and MongoDB for the backend.  <br/>
2. Implemented an intuitive UI for users to create, manage, and share travel itineraries seamlessly.  <br/>
3. Integrated dynamic routing and efficient state management for smooth user experience. <br/>
4. Optimized database queries to enhance performance and provide real-time updates on trip details. <br/> 
5.Deployed the application on Vercel for frontend and backend hosting. 
              </p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-img-container">
              <img src={Medmind} alt="Project 2" className="project-img" />
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://github.com/tanishqpandey26/Medmind")}
                >
                  View Code
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://drive.google.com/file/d/1ZuMHzCp2PdUCnve4B3ZSKwFllLpZE-Aw/view")}
                >
                  Download apk
                </button>
              </div>
            </div>
            <div className="project-description">
              <h2 className="project-title">Project-Two : Medmind</h2>
              <p className="project-text">
1. Developed a Cross-platform medicine reminder app using React Native, Expo, and TypeScript for a seamless iOS and Android experience.  <br/>
2. Implements custom medication scheduling with timely push notifications via Expo Notifications.  <br/>
3. Tracks refill needs and manages medicine supply with intuitive UI and smooth React Native Reanimated animations.  <br/>
4. Integrated Face ID/Touch ID for secure biometric authentication.   <br/> 
5. Maintains local data persistence using AsyncStorage for offline-first support.  <br/> 
6. Provides daily progress logs and dose history tracking with calendar integration for enhanced dose management.  <br/> 
7. Enabled smooth screen transitions using React Navigation.  <br/>
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
