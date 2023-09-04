
import './App.css';
import material from './material/profile-pic.jpg' ; 
import React from 'react';
// import pdfFile from './material/resume.pdf' ;
// import Pdf from "../src/material/resume.pdf";
// import { Document, Page } from 'react-pdf';

function App() {

  return (
    <div className="App">
      
      {/* <div id="showcase">
        <header>
            <nav class='cf'>
                <ul class='cf'>
                  <li class="hide-on-small">
                    <a href='#' target="_blank">Linkedin</a>
                  </li>
                  <li>
                    <a href='#showcase' target="_blank">GitHub</a>
                  </li>

                  <li>
                    
                      
                    <a href='f' target='_blank'>
                    Resume</a>
                    
                  

                  </li>
                  <li>
                    <a href='#' target="_blank">Contact</a>
                    
                  </li>
                  <li>    
                    <a href='' target="_blank">Twitter</a>
                  </li>
                </ul>
                
              </nav>
        </header>
        </div> */}

        
        
        


    <div id="container--main">

        <section id="wrapper--hero" class="section--page">

           <img id="profile--pic"  src={require("./material/profile-pic.jpg")} alt="profile-pic"></img>

           <div>
            <h1 id="user-name">Tanishq Pandey</h1>
            <p id="bio">Software Developer</p>
            <p>👉 tanishqpandeyofficial@gmail.com</p>
           </div>
        </section>

       <section class="section--page">
            <div id="socials--list">

                <a href="#" target="_blank">Linkedin</a>

                <a href="#" target="_blank">GitHub</a>

                <a href="#" target="_blank">Download Resume</a>

                <a href="#" target="_blank">Contact</a>

                <a href="./assets/resume.pdf"  target="_blank">Twitter</a>


            </div>
        </section>
    
        <section class="section--page">
        
            <h2>Skills and Qualifications</h2>

            <ul id="qualifications--list">

                <li>✔️ gjhgshjdg</li>

                <li>✔️ hfsdhfskjh</li>

                <li>✔️ jhfgsdjgf</li>

            </ul>

        </section>


<section class="section--page">


<h2>Tech Stack</h2>

<div id="wrapper--techstack--items">

<div class="card--techstack">
    <span>Java, JavaScript, React.js</span>
</div>

<div class="card--techstack">
    <span>gjhsdfjghgsfh</span>
</div>

<div class="card--techstack">
    <span>fhsdjkhhgkj</span>
</div>

</div>

</section>


<section id="work--history--wrapper" class="section--page">

    <h2>Projects</h2>

    <div class="line--break"></div>

    <div class="card--work--history">

        <h4>Digital Resume-Web Development </h4>
        <p>09/2023</p>
        <p>Worked on making a Digital Resume Website to showcase my skills and qualifications. </p>

    </div>
    
    <div class="line--break"></div>

    <div class="card--work--history">
        
        <h4>Digital Resume-Web Development </h4>
        <p>09/2023</p>
        <p>Worked on making a Digital Resume Website to showcase my skills and qualifications. </p>

    </div>
    
    <div class="line--break"></div>


    
</section>

<section class="section--page">
    <h2>Projects & Accomplishments</h2>

    <div class="card--project">
        <a href="project1.html"><span>🏆 </span>Built a Laboratory management system for forensics lab</a>
    </div>

    <div class="card--project">
        <a href="project1.html" ><span>🏆 </span>Documentation website - Lead team to re-build docs for agora.io</a>
    </div>

    <div class="card--project">
        <a href="project1.html" ><span>🏆 </span>Ecommerce platform using paypal and stripe API for payment integration</a>
    </div>

    <div class="card--project">
        <a href="project1.html"><span>🏆 </span>Social Network - open source project</a>
    </div>

</section>

<br></br>

<div class="footer--bottomtext--center">
    Copyright &copy; 2023
  </div>


    </div>

    {/* </div> */}

    
    </div>
  )
}

export default App;
