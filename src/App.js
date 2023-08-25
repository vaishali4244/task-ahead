import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Notes from './components/Notes/Notes';
import BasicTimeline from './components/Timeline/Timeline';
import About2 from './components/About2/About2';
import Test from './components/Test/Test';
import Vacancy from './components/Vacancy/Vacancy';
import LandingPage from './components/LandingPage/LandingPage';

import './App.css';

function App() {
  const [id, setId] = useState();

  const aboutRef = useRef()
  const notesRef = useRef()
  const testRef = useRef()
  const contactRef = useRef()

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToElement(id)
  }, [id])
  
  return (
    <div className="container">
      <div className='nav-main'>
        <Navbar setId={setId} />
      </div>
      <div id="emotions" ref={aboutRef}>
        <LandingPage />
      </div>
      <div id="manifesto" ref={notesRef}>
        <About />
        <Notes />
      </div>
      <BasicTimeline />
      <About2 />
      <div id="test" ref={testRef}>
        {<Test />}
      </div>
      <div id="contact" ref={contactRef}>
        <Vacancy />
      </div>
    </div>
  );
}

export default App;
