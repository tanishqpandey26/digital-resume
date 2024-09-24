import React from 'react';
import { BsPatchCheckFill } from "react-icons/bs";
import { TbBadgesFilled } from "react-icons/tb";
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
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        
        <div className="experience-details-container">
          <div className="about-containers">
           
            <div className="details-container tech-stack-card">
              <h2 className="experience-sub-title">Tech Stack & Skills</h2>
              <div className="article-container">

               
                <article>
                  <BsPatchCheckFill size={30} />
                  <div>
                    <h3>Next.js</h3>
                  </div>
                </article>

                <article>
                  <BsPatchCheckFill size={30} />
                  <div>
                    <h3>TypeScript</h3>
                  </div>
                </article>

                <article>
                  <BsPatchCheckFill size={30} />
                  <div>
                    <h3>React.js</h3>
                  </div>
                </article>

                <article>
                  <BsPatchCheckFill size={30} />
                  <div>
                    <h3>React Native</h3>
                  </div>
                </article>

                <article>
                  <BsPatchCheckFill size={30} />
                  <div>
                    <h3>Node.js</h3>
                  </div>
                </article>

                <article>
                  <BsPatchCheckFill size={30} />
                  <div>
                    <h3>Express.js</h3>
                  </div>
                </article>

                <article>
                  <BsPatchCheckFill size={30} />
                  <div>
                    <h3>Java</h3>
                  </div>
                </article>

                <article>
                  <BsPatchCheckFill size={30} />
                  <div>
                    <h3>JavaScript</h3>
                  </div>
                </article>

                <article>
                  <BsPatchCheckFill size={30} />
                  <div>
                    <h3>MongoDB</h3>
                  </div>
                </article>

                <article>
                  <BsPatchCheckFill size={30} />
                  <div>
                    <h3>SQL</h3>
                  </div>
                </article>

                <article>
                  <BsPatchCheckFill size={30} />
                  <div>
                    <h3>Tailwind CSS</h3>
                  </div>
                </article>

                <article>
                  <BsPatchCheckFill size={30} />
                  <div>
                    <h3>Git</h3>
                  </div>
                </article>

              </div>
            </div>
          </div>
        </div>

        <TbBadgesFilled
          className="icon arrow"
          size={30}
          onClick={() => scrollHandler('projects')}
        />
      </section>
    </>
  );
}

export default Experience;
