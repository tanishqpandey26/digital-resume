import React from 'react';
import {BsPatchCheckFill} from "react-icons/bs";
import {TbBadgesFilled} from "react-icons/tb";
import "./ExperienceStyles.css";

function Experience() {

  
  function scrollHandler(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
}


  return (
   
    <>
    
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
                  <h3>React.js</h3>
                  <p>Experienced</p>
                </div>
              </article>

              <article>
               <BsPatchCheckFill 
               size={30}/>
                <div>
                  <h3>Next.js</h3>
                  <p>Intermediate</p>
                </div>
              </article>

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

          </div>
          </div>

          <div class="details-container">
            <h2 class="experience-sub-title">Backend Development</h2>
            <div class="article-container">

            <article>
               <BsPatchCheckFill 
               size={30}/>
                <div>
                  <h3>Node.js</h3>
                  <p>Experienced</p>
                </div>
              </article>

              <article>
               <BsPatchCheckFill 
               size={30}/>
                <div>
                  <h3>Express.js</h3>
                  <p>Experienced</p>
                </div>
              </article>

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
    
    </>
  )
}

export default Experience
