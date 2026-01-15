import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      lastScrollY = currentScrollY;
      setShowScrollTop(currentScrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`portfolio ${darkMode ? 'dark' : ''}`}>
      <nav className={navVisible ? '' : 'hidden'}>
        <div className="nav-center">
          <ul className={menuOpen ? 'open' : ''}>
            <li><a href="#hero" onClick={() => setMenuOpen(false)}>Inicio</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>Sobre mí</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Habilidades</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experiencia</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Proyectos</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a></li>
            <li>
              <button className="theme-toggle" onClick={() => { setDarkMode(!darkMode); setMenuOpen(false); }}>
                <span className={`toggle-slider ${darkMode ? 'dark' : 'light'}`}>
                  {darkMode ? '🌙' : '☀️'}
                </span>
              </button>
            </li>
          </ul>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
