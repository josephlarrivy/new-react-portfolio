import React, { useState, useEffect, useRef } from 'react';
import NavBar from './common/NavBar';
import { animateScroll as scroll } from 'react-scroll';

import Home from './components/Home';
import Education from './components/Education';
import MiniGames from './components/MiniGames';
import Projects from './components/Projects';
import MiniProjects from './components/MiniProjects';
import Contact from './components/Contact';

import './App.css'
import BackgroundOverlay from './common/BackgroundOverlay';
import Footer from './common/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const homeRef = useRef(null);
  const educationRef = useRef(null);
  const miniGamesRef = useRef(null);
  const projectsRef = useRef(null);
  const miniProjectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const scrollToSection = (ref) => {
      scroll.scrollTo(ref.current.offsetTop, {
        duration: 2000,
        smooth: 'easeInOutQuart'
      });
    };

    if (activeSection === 'home') {
      scrollToSection(homeRef);
    } else if (activeSection === 'education') {
      scrollToSection(educationRef);
    } else if (activeSection === 'miniGames') {
      scrollToSection(miniGamesRef);
    } else if (activeSection === 'projects') {
      scrollToSection(projectsRef);
    } else if (activeSection === 'miniProjects') {
      scrollToSection(miniProjectsRef);
    } else if (activeSection === 'contact') {
      scrollToSection(contactRef);
    } 
  }, [activeSection]);

  useEffect(() => {
    const navHeight = document.querySelector('nav').offsetHeight;
    document.body.style.paddingTop = `${navHeight - 5 }px`;
  }, []);

  return (
    <div id='main-container'>

        <BackgroundOverlay />
        <div id='navbar-app-container'>
          <NavBar setActiveSection={setActiveSection} />
        </div>  

        <div ref={homeRef} className='section-background' >
          <Home />
        </div>
        <div className='clear-section-separate'/>

        <div ref={educationRef} className='section-background' >
          <Education />
        </div>
        <div className='clear-section-separate'/>

        <div ref={miniGamesRef} className='section-background' >
          <MiniGames />
        </div>
        <div className='clear-section-separate'/>

        <div ref={projectsRef} className='section-background' >
          <Projects />
        </div>
        <div className='clear-section-separate'/>


        <div ref={miniProjectsRef} className='section-background' >
          <MiniProjects />
        </div>
        <div className='clear-section-separate' />

        <div ref={contactRef} className='section-background' >
          <Contact />
        </div>
        {/* <div className='clear-section-separate'/> */}

       <Footer />

    </div>
  );
};

export default App;