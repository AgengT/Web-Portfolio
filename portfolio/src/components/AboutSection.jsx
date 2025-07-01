import React, { forwardRef } from 'react';
import './AboutSection.css';
import ScrollIndicator from './ScrollIndicator';

const AboutSection = forwardRef((props, ref) => (
  <section className="section about" id="about" ref={ref}>
    <div className="about-grid-container">
      <div className="about-left">
        <div className="about-icon-container">
          <div className="inner-ring"></div>
          <div className="about-img-placeholder"></div>
        </div>
      </div>
      <div className="about-right">
        <div className="about-bio">
          <h2>About Me</h2>
          <div className="about-desc-card">
          <p className="about-desc">
            I’m an undergraduate Computer Science student passionate about building impactful digital experiences. <br />
            My journey in software development has taken me through various paths from web technologies to artificial intelligence, but my current focus is on iOS development. <br /><br />
            I enjoy crafting intuitive, responsive apps using Swift and SwiftUI, and I’m always learning how to bring better design and performance to the mobile space. <br /><br />
            Like the Doctor’s TARDIS: always exploring, often unexpected, and definitely bigger on the inside.
          </p>
          </div>
        </div>
        <div className="about-toolkit">
          <h3>My Toolkit</h3>
          <div className="toolkit-scroller">
            <span className="skill-badge">React</span>
            <span className="skill-badge">JavaScript</span>
            <span className="skill-badge">Swift</span>
            <span className="skill-badge">Phyton</span>
            <span className="skill-badge">Git & GitHub</span>
            <span className="skill-badge">Figma</span>
          </div>
        </div>
      </div>
    </div>
    <ScrollIndicator />
  </section>
));

export default AboutSection; 