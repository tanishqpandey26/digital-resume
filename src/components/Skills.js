import React from 'react';
import "./SkillsStyles.css";

function Experience() {
  return (
    <>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Skills</h1>
        
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container tech-stack-card">
              <div className="article-container">
                <article><h3>Next.js</h3></article>
                <article><h3>TypeScript</h3></article>
                <article><h3>React.js</h3></article>
                <article><h3>React Native</h3></article>
                <article><h3>Node.js</h3></article>
                <article><h3>Express.js</h3></article>
                <article><h3>Java</h3></article>
                <article><h3>JavaScript</h3></article>
                <article><h3>MongoDB</h3></article>
                <article><h3>SQL</h3></article>
                <article><h3>Tailwind CSS</h3></article>
                <article><h3>Git</h3></article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
