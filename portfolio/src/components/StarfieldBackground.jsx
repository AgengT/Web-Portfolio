import React, { useMemo } from 'react';
import starImg from '../assets/Star.png';
import './StarfieldBackground.css';

const STAR_COUNT = 30;

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

const StarfieldBackground = () => {
  // Generate star positions and animation delays only once
  const stars = useMemo(() =>
    Array.from({ length: STAR_COUNT }).map((_, i) => ({
      top: `${randomBetween(2, 98)}vh`,
      left: `${randomBetween(2, 98)}vw`,
      size: randomBetween(16, 32),
      delay: randomBetween(0, 3),
      duration: randomBetween(2.5, 5),
      key: `star-${i}`,
    })),
    []
  );

  return (
    <div className="starfield-bg">
      {stars.map(star => (
        <img
          src={starImg}
          alt="star"
          className="star-bg-img"
          key={star.key}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarfieldBackground; 