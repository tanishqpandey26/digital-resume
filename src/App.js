
import './App.css';
import material from './material/profile-pic.jpg' ; 
import React from 'react';


function App() {


  function toggleMenu(){

    const menu = document.querySelector(".menu-links");

    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");

    icon.classList.toggle("open");
  
  }

  return (
    <div className="App">


<nav id='desktop-nav'>

<div className='logo'>Tanishq Pandey</div>

<div>
  <ul className='nav-links'>

     <li><a href='#about'>Linkedin </a></li>

     <li><a href='#about'>GitHub</a></li>

     <li><a href='#about'>Resume</a></li>

     <li><a href='#about'> Twitter</a></li>


  </ul>
</div>

</nav>

<nav id='hamburger-nav'>

<div className='logo'>Tanishq Pandey</div>
<div className='hamburger-menu'>
<div className='hamburger-icon' onClick={toggleMenu}>
<span></span>
<span></span>
<span></span>
</div>

<div className='menu-links'>

<li><a href='#about' onClick={toggleMenu} >Linkedin</a></li>

<li><a href='#about' onClick={toggleMenu}>GitHub</a></li>

<li><a href='#about' onClick={toggleMenu}>Resume</a></li>

<li><a href='#about' onClick={toggleMenu}>Twitter</a></li>


</div>
</div>

</nav>



       
        


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

{/* <div class="footer--bottomtext--center">
    Copyright &copy; 2023
  </div> */}


    </div>

    {/* </div> */}

    
    </div>
  )
}

export default App;
