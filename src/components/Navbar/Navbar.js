import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 1, link: 'home', label: 'Home' },
    { id: 2, link: 'about', label: 'About' },
    { id: 3, link: 'skills', label: 'Skills' },
    { id: 4, link: 'projects', label: 'Projects' },
    { id: 5, link: 'references', label: 'References' },
    { id: 6, link: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo">
        <span className="navbar__logo-bracket">&lt;</span>
        Alfonso Santino P. Ragadio
        <span className="navbar__logo-bracket">/&gt;</span>
      </div>

      <ul className="navbar__links">
        {links.map(({ id, link, label }) => (
          <li key={id}>
            <Link
              to={link}
              smooth
              duration={500}
              offset={-80}
              spy
              activeClass="active"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="navbar__hamburger"
        onClick={() => setNav(!nav)}
        aria-label="Toggle navigation"
      >
        {nav ? <FaTimes /> : <FaBars />}
      </button>

      {nav && (
        <ul className="navbar__mobile">
          {links.map(({ id, link, label }) => (
            <li key={id}>
              <Link
                to={link}
                smooth
                duration={500}
                offset={-80}
                onClick={() => setNav(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
