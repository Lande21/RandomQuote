import React, { useState, useEffect } from 'react';
import './quotedisplay.css'; 

function QuoteDisplay() {
  const [quote, setQuote] = useState('');
  // current time
  const [centralTime, setCentralTime] = useState('');
  const [kigaliTime, setKigaliTime] = useState('');

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
    //fecth 
    const fetchCentralTime = async () => {
      try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/America/Chicago');
        if (response.ok) {
          const data = await response.json();
          const currentDateTime = new Date(data.utc_datetime);
          setCentralTime(currentDateTime.toLocaleTimeString('en-US'));
          
        } else {
          throw new Error('Failed to fetch Central Time');
        }
      } catch (error) {
        console.error('Error fetching central time:', error);
      }
    };
    fetchCentralTime();
    const fetchKigaliTime = async () => {
      try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/Africa/Kigali');
        if (response.ok) {
          const data = await response.json();
          // Get the time in Kigali, Rwanda
          const currentDateTime = new Date(data.utc_datetime);
          // Adjust for the time difference (8 hours ahead of Central US time)
          currentDateTime.setHours(currentDateTime.getHours() + 8);
          //const currentDateTime = new Date(data.datetime);
          setKigaliTime(currentDateTime.toLocaleTimeString('en-US'));
        } else {
          throw new Error('Failed to fetch Kigali Time');
        }
      } catch (error) {
        console.error('Error fetching Kigali time:', error);
      }
    };

    fetchKigaliTime();
  }, []);


  return (
    <div>
      
      <h1>Wisdom of Today: Wednesday, January 17th, 2024 </h1>
      <div class="quote-container">
      <blockquote className="quote">{quote}
      </blockquote>
      
      <button onClick={fetchRandomQuote} className="button">Generate Random Quote</button>
      
      <h2 className="mytime">Current Time Chicago, USA</h2>
      <p className="mytime">{centralTime}</p>
      <h2 className="mytime">Current Time Kigali, Rwanda</h2>
      <p className="mytime">{kigaliTime}</p></div>
    </div>
  );
}

export default QuoteDisplay;
