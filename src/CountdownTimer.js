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


  useEffect(() => {
    // Exit the effect if the countdown reaches 0
    if (seconds <= 0) {
      return;
    }

    // Update the countdown every second
    const timerId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(timerId);
  }, [seconds]);

  return (
    <div>
      <h3 className="countt">Countdown : {seconds} seconds</h3>
    </div>
  );
};

export default CountdownTimer;
