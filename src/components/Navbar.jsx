import { navItems } from '../data/siteData.js';

export default function Navbar({
  activeSection,
  isDarkMode,
  isMobileNavOpen,
  onSectionScroll,
  onThemeToggle,
  onToggleMobileNav
}) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <button className="logo" onClick={() => onSectionScroll('hero')} type="button">
          <img src="/logo.png" alt="Yasir Khan" />
          <span>Yasir Khan</span>
        </button>

        <div className="nav-links" id="desktop-nav">
          {navItems.map(item => (
            <button
              className={activeSection === item.id ? 'active' : ''}
              data-section={item.id}
              key={item.id}
              onClick={() => onSectionScroll(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDarkMode}
            className="theme-toggle"
            onClick={onThemeToggle}
            title={isDarkMode ? 'Light mode' : 'Dark mode'}
            type="button"
          >
            <i className={isDarkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>

          <button
            aria-expanded={isMobileNavOpen}
            aria-label="Toggle navigation"
            className="mobile-toggle"
            id="mobile-toggle"
            onClick={onToggleMobileNav}
            type="button"
          >
            <i className={isMobileNavOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>
      </div>

      <div
        className="mobile-nav"
        id="mobile-nav"
        style={{ display: isMobileNavOpen ? 'flex' : 'none' }}
      >
        {navItems.map(item => (
          <button
            className={activeSection === item.id ? 'active' : ''}
            data-section={item.id}
            key={item.id}
            onClick={() => onSectionScroll(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
