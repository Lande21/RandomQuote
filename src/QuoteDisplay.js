import React, { useState, useEffect } from 'react';
import './quotedisplay.css'; 

function QuoteDisplay() {
  const [quote, setQuote] = useState('');

  // Function to fetch a random quote
  const fetchRandomQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote(data.content))
      .catch(error => console.log('Error fetching quote:', error));
  };

  useEffect(() => {
    // Fetch a random quote when the component mounts
    fetchRandomQuote();
  }, []);

  return (
    <div>
      <h1>Wisdom of the Day</h1>
      <p className="quote">{quote}</p>
      <button onClick={fetchRandomQuote} className="button">Generate Random Quote</button>
    </div>
  );
}

export default QuoteDisplay;
