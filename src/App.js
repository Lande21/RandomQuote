import React from 'react';
import './App.css';
import Cat from './Cat';
import Compliment from './components/Compliment';
import CountdownTimer from './CountdownTimer';
import Practicetwo from './Practicetwo';
import QuoteDisplay from './QuoteDisplay';
import UnsplashGallery from './Unsplashprac';
import ProjectCard from './components/ProjectCard';

function App() {
  const targetDate = new Date('December 31, 2024 22:59:59');
  return (
    <div className="App">
      <header className="App-header">
        <QuoteDisplay />
        <h1> Cute Compliment Generator</h1>
        <Compliment />
        <h1>My Countdown </h1>
        <CountdownTimer targetDate={targetDate} />

        
        
       
      </header>
      <ProjectCard
        name="Project Name"
        description="Description of the project goes here. Provide a brief overview of the technologies used and the problem solved by the project."
        image="projectimages/RolandeUmuhozaApp.png"
        link="#"
      />
      <ProjectCard
        name="Project Name"
        description="Description of the project goes here. Provide a brief overview of the technologies used and the problem solved by the project."
        image="projectimages/RolandeUmuhozaApp.png"
        link="#"
      />
    </div>
  );
}

export default App;
