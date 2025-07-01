import React from 'react'
import { useState, useEffect, useRef } from 'react'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import WorksSection from './components/WorksSection'
import ContactsSection from './components/ContactsSection'
import StarfieldBackground from './components/StarfieldBackground'
import FlyingTardis from './components/FlyingTardis'
import FlyingDalek from './components/FlyingDalek'
import './styles/App.css'

function App({ worksData }) {
  const [carouselIdx, setCarouselIdx] = useState(0)
  const prevWork = () => setCarouselIdx((i) => (i - 1 + worksData.length) % worksData.length)
  const nextWork = () => setCarouselIdx((i) => (i + 1) % worksData.length)

  const sectionRefs = [useRef(), useRef(), useRef(), useRef()]
  useEffect(() => {
    console.log("It's bigger on the inside.");
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          } else {
            entry.target.classList.remove('in-view')
          }
        })
      },
      { threshold: 0.2 }
    )
    sectionRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Scroll to section if hash is present in URL on initial mount
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Listen for hash changes (e.g., when navigating with <Link to="/#works">)
    const onHashChange = () => {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="portfolio-container">
      <StarfieldBackground />
      <FlyingTardis />
      <FlyingDalek />
      <HomeSection ref={sectionRefs[0]} />
      <AboutSection ref={sectionRefs[1]} />
      <WorksSection
        ref={sectionRefs[2]}
        worksData={worksData}
        carouselIdx={carouselIdx}
        prevWork={prevWork}
        nextWork={nextWork}
      />
      <ContactsSection ref={sectionRefs[3]} />
    </div>
  )
}

export default App
