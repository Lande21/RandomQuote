import React from 'react';
import './App.css';
import Practices from './Practices';
import QuoteDisplay from './QuoteDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuoteDisplay />
        <Practices />
       
      </header>
    </div>
  );
}

export default App;
