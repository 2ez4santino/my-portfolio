import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="section__header">
        <h2 className="section__title">About <span>Me</span></h2>
        <div className="section__line" />
      </div>

      <div className="about__container">
        <div className="about__image-wrapper">
          <div className="about__image-box">
            <div className="about__avatar">
              <span>A</span>
            </div>
            <div className="about__image-border" />
          </div>
        </div>

        <div className="about__text">
          <p>
            Hi! I'm <strong>Alfonso Santino P. Ragadio</strong>, a passionate Front End Developer who loves crafting
            clean, efficient, and user-friendly web applications. I enjoy turning complex
            problems into simple, beautiful solutions.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to
            open-source projects, or leveling up my skills through side projects.
          </p>

          <div className="about__details">
            <div className="about__detail">
              <span className="about__detail-label">Name</span>
              <span className="about__detail-value">Alfonso Santino P. Ragadio</span>
            </div>
            <div className="about__detail">
              <span className="about__detail-label">Role</span>
              <span className="about__detail-value">Front End Developer</span>
            </div>
            <div className="about__detail">
              <span className="about__detail-label">Location</span>
              <span className="about__detail-value">Philippines, Quezon City</span>
            </div>
            <div className="about__detail">
              <span className="about__detail-label">Availability</span>
              <span className="about__detail-value about__detail-value--green">Open to work</span>
            </div>
          </div>

          <a href="/resume.pdf" className="btn btn--primary about__resume-btn" download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
