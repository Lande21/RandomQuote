import React from 'react';
import './App.css';
import Practices from './Practices';
import Practicetwo from './Practicetwo';
import QuoteDisplay from './QuoteDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuoteDisplay />
        
        <Practicetwo />
       
      </header>
    </div>
  );
}

export default App;
