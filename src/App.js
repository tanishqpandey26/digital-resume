import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Profile from './components/Profile';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";


function App() {


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

  <div className='App'>

   <Navbar/> 

   <Profile onScrollToContact={handleScrollToContact}/>
    
   <AboutMe/>

   <Experience/>

   <Projects/>

   <Contact ref={contactSectionRef}/>

    <Footer/>

  </div>

  );
}

export default App;
