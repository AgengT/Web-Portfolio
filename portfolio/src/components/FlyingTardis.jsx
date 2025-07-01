import React, { useState, useEffect } from 'react';
import tardisImg from '../assets/tardis.png';
import './FlyingTardis.css';

const ANIMATION_CLASSES = ['fly-by-1', 'fly-by-2', 'fly-by-3', 'fly-by-4'];

const FlyingTardis = () => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * ANIMATION_CLASSES.length);
    setAnimationClass(ANIMATION_CLASSES[randomIndex]);

    const animationDuration = 18000;
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * ANIMATION_CLASSES.length);
      setAnimationClass(ANIMATION_CLASSES[newIndex]);
    }, animationDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flying-tardis-container">
      <img
        src={tardisImg}
        alt="Flying TARDIS"
        className={`flying-tardis ${animationClass}`}
        onAnimationEnd={() => setAnimationClass('')}
      />
    </div>
  );
};

export default FlyingTardis; 