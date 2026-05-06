import { projects } from '../data/siteData.js';

export default function Portfolio({ onSectionScroll }) {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Some of the work I've done recently.</p>
        <div className="portfolio-grid" id="portfolio-projects">
          {projects.map(project => (
            <article className="portfolio-card" key={project.title}>
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className={`project-visual ${project.accent ? `project-visual-${project.accent}` : ''}`} aria-hidden="true">
                  <i className={project.icon}></i>
                </div>
              )}
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-badges">
                  {project.technologies.map(technology => (
                    <span className="badge" key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="card-actions">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="live-btn">
                      <i className={project.liveIcon || 'fab fa-github'}></i>
                      {project.liveLabel || 'View Source'}
                    </a>
                  ) : (
                    <span className="live-btn disabled-action">
                      <i className="far fa-clock"></i>
                      {project.status}
                    </span>
                  )}
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="code-btn">
                      <i className="fab fa-github"></i>
                      Code
                    </a>
                  ) : (
                    <span className="code-btn disabled-action">
                      <i className="fas fa-folder-open"></i>
                      Reserved
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="center">
          <button className="btn-primary" onClick={() => onSectionScroll('contact')} type="button">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
