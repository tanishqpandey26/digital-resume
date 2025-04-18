import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Blog from "../components/Blog";

function Home() {

    const [scrollToContact, setScrollToContact] = useState(false);
    const contactSectionRef = useRef(null);
  
    useEffect(() => {
      if (scrollToContact && contactSectionRef.current) {
        contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        setScrollToContact(false);  
      }
    }, [scrollToContact]);
  
    function handleScrollToContact() {
      setScrollToContact(true);
    }

    
  return (
    <div>
     
    <Navbar/> 
    <Profile onScrollToContact={handleScrollToContact}/>
    <Skills/>
    <Projects/>
    <Contact ref={contactSectionRef}/>
    <Blog/>
    <Footer/>
    
    </div>
  )
}

export default Home;
