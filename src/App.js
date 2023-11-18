import React from 'react';
import './App.css';
import CountdownTimer from './CountdownTimer';
import Practicetwo from './Practicetwo';
import QuoteDisplay from './QuoteDisplay';
import UnsplashGallery from './Unsplashprac';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuoteDisplay />
        <CountdownTimer />
        
        <UnsplashGallery />
       
      </header>
    </div>
  );
}

export default App;
