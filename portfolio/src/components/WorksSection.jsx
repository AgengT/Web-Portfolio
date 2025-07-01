import React, { forwardRef } from 'react';
import './WorksSection.css';
import { Link } from 'react-router-dom';
import ScrollIndicator from './ScrollIndicator';

const WorksSection = forwardRef(({ worksData, carouselIdx, prevWork, nextWork }, ref) => (
  <section className="section works" id="works" ref={ref}>
    <h2>Works</h2>
    <div className="carousel-container">
      <Link to={`/work/${worksData[carouselIdx].id}`} className="carousel-item">
        <img src={worksData[carouselIdx].imageUrl} alt={worksData[carouselIdx].title} className="carousel-img" />
        <div className="carousel-info">
          <h3>{worksData[carouselIdx].title}</h3>
          <p>{worksData[carouselIdx].shortDescription}</p>
          <div className="carousel-tech">
            {worksData[carouselIdx].tech.map((t) => (
              <span className="tech-badge" key={t}>{t}</span>
            ))}
          </div>
          <div className="view-details-overlay">
            <span>View Details</span>
          </div>
        </div>
      </Link>
    </div>
    <div className="carousel-nav">
      <button className="carousel-arrow left" onClick={prevWork} aria-label="Previous Work">&#9664;</button>
      <button className="carousel-arrow right" onClick={nextWork} aria-label="Next Work">&#9654;</button>
    </div>
    <ScrollIndicator />
  </section>
));

export default WorksSection; 