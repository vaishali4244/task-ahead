import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Notes from './components/Notes/Notes';
import BasicTimeline from './components/Timeline/Timeline';
import About2 from './components/About2/About2';
import Test from './components/Test/Test';
import Vacancy from './components/Vacancy/Vacancy';
import Rating from './components/Rating/Rating';

import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <About/>
      <Notes/>
      <BasicTimeline/>
      <About2/>
      <Rating/>
      <Test/>
     <Vacancy/>

    </div>
  );
}

export default App;
