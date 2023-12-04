import React from 'react';
import './App.css';
import CountdownTimer from './CountdownTimer';
import Practicetwo from './Practicetwo';
import QuoteDisplay from './QuoteDisplay';
import UnsplashGallery from './Unsplashprac';

function App() {
  const targetDate = new Date('December 10, 2023 22:59:59');
  return (
    <div className="App">
      <header className="App-header">
        <QuoteDisplay />
        <h1>My Countdown </h1>
        <CountdownTimer targetDate={targetDate} />
        
        
       
      </header>
    </div>
  );
}

export default App;
