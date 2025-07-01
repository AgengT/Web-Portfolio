import React, { useEffect } from 'react';
import './WorkDetail.css';
import { useParams, Link } from 'react-router-dom';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

const WorkDetail = ({ works }) => {
  const { workId } = useParams();
  const work = works.find(w => w.id === parseInt(workId));

  useEffect(() => {
    Prism.highlightAll();
  }, [work]);

  if (!work) {
    return (
      <div className="work-detail-container">
        <div className="work-detail-content">
          <h2>Work not found</h2>
          <Link to="/#works" className="back-link">Return to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="work-detail-container">
      <div className="work-detail-content">
        <Link to="/#works" className="back-link">← Return to Portfolio</Link>
        <h1>{work.title}</h1>
        <p className="work-category">{work.category}</p>
        <img src={work.imageUrl} alt={work.title} className="work-detail-image" />

        <p className="work-short-description">{work.shortDescription}</p>

        <div className="work-detail-tech-container">
          {work.tech.map(t => <span className="skill-badge" key={t}>{t}</span>)}
        </div>

        <div className="work-detail-section">
          <h2>Project Breakdown</h2>
          <p className="problem-statement">{work.problemStatement}</p>
          {work.developmentProcess && work.developmentProcess.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <a href={work.repoLink} target="_blank" rel="noopener noreferrer" className="repo-link-button">
          View Repository on GitHub
        </a>
      </div>
    </div>
  );
};

export default WorkDetail; 