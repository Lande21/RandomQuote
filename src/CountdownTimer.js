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
        <h1 className="countt">Countdown for the NEW YEAR's!!!</h1>
        <h4 className="daily">May GOD strengthen me this year of 2024 as i move my feet and strengthen my faith with GOD. I know that i got this!! I am applying to 3 Grad schools by feb 2st</h4>
        <h4><ul><li>Woke up,took shower</li>
        <li>I went to work 9:30-5pm and did small projects for deanna</li>
        <li>Leonce visited and made beignets zidahiye mwimbere</li>
        <li>We ate chicken, fries and ibishyimbo for dinner</li></ul>
        </h4>
        <p>{timeLeft.days} days</p>
        <p>{timeLeft.hours} hours</p>
        <p>{timeLeft.minutes}  minutes</p>
        <p>{timeLeft.seconds} seconds</p>
      
    </div>
  );
};

export default CountdownTimer;
