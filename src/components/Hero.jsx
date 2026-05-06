export default function Hero({ onSectionScroll }) {
  return (
    <section id="hero" className="hero">
      <div className="background">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>

      <div className="hero-content">
        <h1>
          <span>Frontend &amp; WordPress</span>
          <span className="gradient-text">Developer</span>
        </h1>
        <p>
          Crafting beautiful, responsive websites and modern web applications with clean code and
          exceptional user experiences.
        </p>
        <div className="hero-buttons">
          <button className="btn primary" onClick={() => onSectionScroll('portfolio')} type="button">
            View My Work
          </button>
          <button className="btn outline" onClick={() => onSectionScroll('contact')} type="button">
            Get In Touch
          </button>
        </div>
        <div className="hero-icons">
          <a href="https://github.com/yasir50233" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/yasir-khan-it" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:yasirkhan9850233@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <button className="scroll-indicator" onClick={() => onSectionScroll('about')} type="button">
        <i className="fas fa-chevron-down"></i>
      </button>
    </section>
  );
}
