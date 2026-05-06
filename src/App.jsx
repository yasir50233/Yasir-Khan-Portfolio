import { useEffect, useState } from 'react';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Portfolio from './components/Portfolio.jsx';
import Skills from './components/Skills.jsx';
import { navItems } from './data/siteData.js';
import { scrollToSection } from './utils/scroll.js';

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem('theme');

  if (savedTheme) {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  const isDarkMode = theme === 'dark';

  function handleSectionScroll(sectionId) {
    scrollToSection(sectionId);
    setIsMobileNavOpen(false);
  }

  function toggleTheme() {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    function updateActiveSection() {
      const scrollPosition = window.scrollY + 100;
      let currentSection = 'hero';

      navItems.forEach(item => {
        const section = document.getElementById(item.id);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    }

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection);

    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  return (
    <>
      <Navbar
        activeSection={activeSection}
        isDarkMode={isDarkMode}
        isMobileNavOpen={isMobileNavOpen}
        onSectionScroll={handleSectionScroll}
        onThemeToggle={toggleTheme}
        onToggleMobileNav={() => setIsMobileNavOpen(currentValue => !currentValue)}
      />

      <main>
        <Hero onSectionScroll={handleSectionScroll} />
        <About onSectionScroll={handleSectionScroll} />
        <Skills onSectionScroll={handleSectionScroll} />
        <Portfolio onSectionScroll={handleSectionScroll} />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
