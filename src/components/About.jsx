import { useEffect, useRef, useState } from 'react';
import { aboutHighlights, aboutStats } from '../data/siteData.js';

export default function About({ onSectionScroll }) {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [statValues, setStatValues] = useState(() =>
    Object.fromEntries(aboutStats.map(stat => [stat.id, 0]))
  );

  const aboutRef = useRef(null);

  useEffect(() => {
    if (!aboutRef.current) {
      return undefined;
    }

    if (!('IntersectionObserver' in window)) {
      setIsAboutVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setIsAboutVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAboutVisible) {
      return undefined;
    }

    const duration = 1100;
    const startTime = performance.now();
    let animationFrame = 0;

    function updateCounters(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const nextValues = Object.fromEntries(
        aboutStats.map(stat => [stat.id, Math.round(stat.value * progress)])
      );

      setStatValues(nextValues);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounters);
      }
    }

    animationFrame = requestAnimationFrame(updateCounters);

    return () => cancelAnimationFrame(animationFrame);
  }, [isAboutVisible]);

  return (
    <section className="about-section" id="about" ref={aboutRef}>
      <div className="about-container">
        <div className="about-visual">
          <img
            alt="Developer workspace with a laptop showing code"
            className="about-image"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1080"
          />
          <div className="about-badge">
            <i className="fas fa-laptop-code"></i>
            <span>Clean, responsive builds</span>
          </div>
        </div>

        <div className="about-content">
          <span className="section-kicker">About Me</span>
          <h2 className="section-title">I build websites that look sharp and work smoothly.</h2>
          <p>
            I'm Yasir Khan, a frontend and WordPress developer focused on turning ideas into fast,
            responsive websites with clean layouts, thoughtful interactions, and easy-to-manage
            content.
          </p>
          <p>
            My work blends design detail with practical development, so every section feels polished
            while staying simple for clients and visitors to use.
          </p>

          <div className="about-highlights">
            {aboutHighlights.map(highlight => (
              <article className="about-highlight" key={highlight.title}>
                <i className={highlight.icon}></i>
                <div>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="about-stats" aria-label="Project highlights">
            {aboutStats.map(stat => (
              <div className="about-stat" key={stat.id}>
                <strong data-count={stat.value}>{statValues[stat.id]}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <button
            className="btn primary about-cta"
            onClick={() => onSectionScroll('portfolio')}
            type="button"
          >
            <i className="fas fa-layer-group"></i>
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
