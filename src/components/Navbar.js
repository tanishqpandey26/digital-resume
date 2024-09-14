import React from 'react';
import "./NavbarStyles.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = React.useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  
  return (
    
    <>
    
    
<nav id="desktop-nav">
      <div class="logo">Tanishq Pandey</div>
      <div>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#blog">Blogs</a></li>
        </ul>
      </div>
    </nav>

    <nav id="hamburger-nav">
  <div className="logo">Tanishq Pandey</div>
  <div className="hamburger-menu">
    <div className="hamburger-icon" onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className={menuOpen ? "menu-links open" : "menu-links"}>
      <li><a href="#about" onClick={toggleMenu}>About</a></li>
      <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
      <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
      <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      <li><a href="#blog" onClick={toggleMenu}>Blogs</a></li>
    </div>
  </div>
</nav>

</>
  )
}

export default Navbar
