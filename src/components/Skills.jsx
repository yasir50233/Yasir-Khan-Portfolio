import { useEffect, useMemo, useRef, useState } from 'react';
import { skillFilters, skills } from '../data/siteData.js';

export default function Skills({ onSectionScroll }) {
  const [skillFilter, setSkillFilter] = useState('all');
  const [areSkillsVisible, setAreSkillsVisible] = useState(false);
  const [areMetersReady, setAreMetersReady] = useState(false);

  const skillsRef = useRef(null);

  const filteredSkills = useMemo(() => {
    if (skillFilter === 'all') {
      return skills;
    }

    return skills.filter(skill => skill.category === skillFilter);
  }, [skillFilter]);

  useEffect(() => {
    if (!skillsRef.current) {
      return undefined;
    }

    if (!('IntersectionObserver' in window)) {
      setAreSkillsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setAreSkillsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });

    observer.observe(skillsRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!areSkillsVisible) {
      return undefined;
    }

    setAreMetersReady(false);
    const animationFrame = requestAnimationFrame(() => setAreMetersReady(true));

    return () => cancelAnimationFrame(animationFrame);
  }, [areSkillsVisible, skillFilter]);

  return (
    <section className="skills-section" id="skills" ref={skillsRef}>
      <div className="skills-container">
        <div className="skills-header">
          <span className="section-kicker">Skills</span>
          <h2 className="section-title">The stack I use to make clean, responsive websites.</h2>
          <p className="section-subtitle">
            A focused mix of frontend craft, WordPress development, and practical tooling for fast,
            maintainable delivery.
          </p>
        </div>

        <div className="skill-tabs" role="tablist" aria-label="Skill categories">
          {skillFilters.map(filter => (
            <button
              aria-selected={skillFilter === filter.id}
              className={`skill-filter${skillFilter === filter.id ? ' active' : ''}`}
              data-skill-filter={filter.id}
              key={filter.id}
              onClick={() => setSkillFilter(filter.id)}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="skills-layout">
          <div className="skills-grid">
            {filteredSkills.map(skill => (
              <article className="skill-card" data-skill-category={skill.category} key={skill.title}>
                <div className="skill-card-header">
                  <span className="skill-icon">
                    <i className={skill.icon}></i>
                  </span>
                  <div>
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                  </div>
                </div>
                <div className="skill-meter" aria-label={`${skill.title} skill level`}>
                  <span style={{ '--level': areMetersReady ? `${skill.level}%` : '0%' }}></span>
                </div>
              </article>
            ))}
          </div>

          <aside className="skills-summary" aria-label="Workflow strengths">
            <h3>Workflow Strengths</h3>
            <ul>
              <li>
                <i className="fas fa-check"></i>
                <span>Mobile-first layouts that hold up on real screens.</span>
              </li>
              <li>
                <i className="fas fa-check"></i>
                <span>Reusable components with clear, maintainable code.</span>
              </li>
              <li>
                <i className="fas fa-check"></i>
                <span>WordPress builds that clients can actually update.</span>
              </li>
              <li>
                <i className="fas fa-check"></i>
                <span>Performance-minded styling and lightweight interactions.</span>
              </li>
            </ul>
            <button className="btn primary" onClick={() => onSectionScroll('contact')} type="button">
              Start a Project
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
