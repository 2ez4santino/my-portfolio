import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__particles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="hero__particle" style={{ '--i': i }} />
        ))}
      </div>

      <div className="hero__content">
        <p className="hero__greeting">Hi there, I'm</p>
        <h1 className="hero__name">Alfonso Santino P. Ragadio</h1>
        <h2 className="hero__title">
          Front End <span className="hero__title-accent">Developer</span>
        </h2>
        <p className="hero__subtitle">
          I build beautiful, fast, and accessible web experiences.
        </p>

        <div className="hero__cta">
          <Link to="projects" smooth duration={500} offset={-80}>
            <button className="btn btn--primary">View My Work</button>
          </Link>
          <Link to="contact" smooth duration={500} offset={-80}>
            <button className="btn btn--outline">Contact Me</button>
          </Link>
        </div>

        <div className="hero__socials">
          <a
            href="https://github.com/2ez4santino"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <Link to="about" smooth duration={500} offset={-80} className="hero__scroll-hint">
        <HiArrowDown />
      </Link>
    </section>
  );
};

export default Hero;
