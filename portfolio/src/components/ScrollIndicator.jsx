import React from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = () => (
  <div className="scroll-indicator">
    <svg width="36" height="36" viewBox="0 0 100 100" className="gallifreyan-seal">
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4" fill="none" />
      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="50" cy="30" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="50" y1="50" x2="50" y2="22" stroke="currentColor" strokeWidth="2" />
    </svg>
  </div>
);

export default ScrollIndicator; 