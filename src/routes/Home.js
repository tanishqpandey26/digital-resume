import React, { useRef, useState, useEffect } from 'react';
import AboutMe from '../components/AboutMe';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
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
  
    <AboutMe/>

    <Experience/>

    <Projects/>

    <Contact ref={contactSectionRef}/>

    <Blog/>

    <Footer/>
      
    </div>
  )
}

export default Home;
