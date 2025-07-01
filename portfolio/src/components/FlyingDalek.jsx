import React, { useState, useEffect } from 'react';
import dalekImg from '../assets/dalek.png';
import './FlyingDalek.css';

const ANIMATION_CLASSES = ['patrol-1', 'patrol-2', 'patrol-3', 'patrol-4'];

const FlyingDalek = () => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const startAnimation = () => {
      const randomIndex = Math.floor(Math.random() * ANIMATION_CLASSES.length);
      setAnimationClass(ANIMATION_CLASSES[randomIndex]);
    };

    startAnimation(); // Start immediately
    const interval = setInterval(startAnimation, 16000); // Repeat every 16 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flying-dalek-container">
      <img
        src={dalekImg}
        alt="Flying Dalek"
        className={`flying-dalek ${animationClass}`}
        onAnimationEnd={() => setAnimationClass('')}
      />
    </div>
  );
};

export default FlyingDalek; 