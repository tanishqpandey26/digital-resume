import React, { useState } from 'react';
import "./NavbarStyles.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {

 const [showMenu ,setshowMenu] = useState(false);

const handlebuttonToggle = () =>{
  setshowMenu(!showMenu);
}
  
  return (
  
    <header>
      <div className='container'>
        <div className='grid navbar-grid'>
          <div className='logo'>
            <h1>Tanishq Pandey</h1>
          </div>

        <nav className={showMenu ? "menu-mobile" : "menu-web"}>
          <ul>

          <li><a href="#about">About Me</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#blog">Blogs</a></li>

          </ul>
        </nav>


        <div className='ham-menu'>

          <button onClick={handlebuttonToggle} >
          <GiHamburgerMenu/>
          </button>

        </div>

        </div>
      </div>
    </header>
    
 
  )
}

export default Navbar;
