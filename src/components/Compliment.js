import React, { useState } from 'react';

const Compliment = () => {
    const compliments =[
        'You are amazing!',
        'You have a great smile',
        'You`re doing a fantastic job!',
        'You are lovef and appreciated',
        'I am strong and capable of overcoming any challenges that come my way.',
        'I radiate confidence, self-respect, and inner harmony.',
        'I am deserving of success and happiness.',
        'My potential is limitless, and I am constantly growing and evolving.',
        'I am intelligent, and I possess the knowledge and wisdom needed to achieve my goals.',
        'I am resilient; I bounce back from setbacks stronger than before.',
        'My past does not define me; I am creating a bright and positive future.',
        'I am surrounded by love and support from those who genuinely care about me.',
        'I embrace my uniqueness; I am one of a kind, and that is my superpower.',
        'I am making a significant difference in the world through my actions and contributions.',
        'I am worthy of love and respect from myself and others.',
        'I forgive myself for any mistakes and learn from them; I am a work in progress.',
        'I attract positivity into my life and repel negativity.',
        'I am a magnet for success, and I attract only good things into my life.',
        'My body is healthy, and my mind is sharp; I am taking care of myself.',
        'I am at peace with my past, present, and future.',
        'I trust in my abilities and believe in my capacity to achieve greatness.',
        'I am a beacon of light, spreading joy and positivity to those around me.',
        'I am proud of all that I have accomplished and excited for whats to come.',
        'I am enough, just as I am. I am worthy of all the good things life has to offer.',
    ];

    const [randomCompliment, setRandomCompliment] = useState('');

    const generateCompliment = () => {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        setRandomCompliment(compliments[randomIndex]);
    };

    return (
        <div>
            <p> {randomCompliment}</p>
            <button onClick={generateCompliment}>Generate Compliment</button>
        </div>
    );
};

export default Compliment;