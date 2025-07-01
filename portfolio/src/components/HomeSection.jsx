import React, { forwardRef, useState, useEffect } from 'react';
import ScrollIndicator from './ScrollIndicator';
import './HomeSection.css';

const greetings = [
  { lang: 'English', text: "Hello I'm Ageng" },
  { lang: 'German', text: 'Hallo, ich bin Ageng' },
  { lang: 'Indonesian', text: 'Halo, saya Ageng' },
  { lang: 'Mandarin', text: '你好，我是Ageng' },
  { lang: 'Korean', text: '안녕하세요, 저는 Ageng입니다' },
];

const HomeSection = forwardRef((props, ref) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIdx(i => (i + 1) % greetings.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section home" id="home" ref={ref}>
      <h1 className="home-title">{greetings[idx].text}</h1>
      <p className="home-subtitle">A Journey Through Spacetime & Code</p>
      <ScrollIndicator />
    </section>
  );
});

export default HomeSection; 