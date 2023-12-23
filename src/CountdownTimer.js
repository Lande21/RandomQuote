// CountdownTimer.js

import React, { useState, useEffect } from 'react';
import './quotedisplay.css'; 

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;

        if (difference < 0){
            //target date has passed
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) /(1000 * 60 *60));
        const minutes = Math.floor((difference % (1000 * 60 * 60))/ (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);


        return {
            days,
            hours,
            minutes,
            seconds,
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
    // Exit the effect if the countdown reaches 0
        const timerId = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
         }, 1000);
        return () => clearInterval(timerId);
    }, []);

  return (
    <div>
        <h1 className="countt">Countdown to ChristMass</h1>
        <p>{timeLeft.days} days</p>
        <p>{timeLeft.hours} hours</p>
        <p>{timeLeft.minutes}  minutes</p>
        <p>{timeLeft.seconds} seconds</p>
      
    </div>
  );
};

export default CountdownTimer;
