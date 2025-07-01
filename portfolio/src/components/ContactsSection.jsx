import React, { forwardRef } from 'react';
import './ContactsSection.css';

const ContactsSection = forwardRef((props, ref) => (
  <section className="section contacts-section" id="contacts" ref={ref}>
    <h2>Contact</h2>
    <p>Reach out via subspace transmission:<br/>agengtawang01@gmail.com</p>
    <div className="contact-icons">
      <a href="https://www.instagram.com/haloakuageng/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="contact-icon">
        <svg className="gallifreyan-icon-bg" width="40" height="40" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" strokeWidth="2" fill="none" opacity="0.5"/><circle cx="50" cy="50" r="40" strokeWidth="1" fill="none" opacity="0.8"/></svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
      </a>
      <a href="https://www.linkedin.com/in/ageng-tawang-aryonindito-aaa65a251/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="contact-icon">
        <svg className="gallifreyan-icon-bg" width="40" height="40" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" strokeWidth="2" fill="none" opacity="0.5"/><circle cx="50" cy="50" r="40" strokeWidth="1" fill="none" opacity="0.8"/></svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
      <a href="https://github.com/AgengT" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="contact-icon">
        <svg className="gallifreyan-icon-bg" width="40" height="40" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" strokeWidth="2" fill="none" opacity="0.5"/><circle cx="50" cy="50" r="40" strokeWidth="1" fill="none" opacity="0.8"/></svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
      </a>
    </div>
  </section>
));

export default ContactsSection; 