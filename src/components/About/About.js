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
            <strong>Alfonso Santino Palma Ragadio</strong> is a fourth-year Computer Engineering student at the
            Technological Institute of the Philippines, where he is expected to complete his degree in 2026.
            His academic journey reflects a multidisciplinary foundation, having previously studied under
            the Humanities and Social Sciences (HUMSS) strand at Carlos P. Romulo Senior High School,
            which helped develop his communication and analytical skills prior to transitioning into engineering.
          </p>
          <p>
            Ragadio completed his primary education at Sto. Nino Parochial School (2010-2016) and
            his junior high school education at Quezon City Academy (2016-2020). He then pursued senior
            high school at Carlos P. Romulo Senior High School (2020-2022), where he built a strong
            grounding in critical thinking and communication.
          </p>
          <p>
            His academic interests focus on networking and cybersecurity, alongside software and mobile
            application development. He possesses technical proficiency in front-end web development using
            HTML, CSS, and JavaScript, as well as experience in mobile development using Android Studio.
            In addition, he is skilled in using industry-relevant tools such as Cisco Packet Tracer for
            network simulation, and Adobe Photoshop and Adobe Illustrator for digital design and visualization.
            He is also recognized for his problem-solving abilities and effective communication skills.
          </p>
          <p>
            Currently, Ragadio is working on a thesis proposal that explores a Recurrent Neural Network
            (RNN)-Based Traffic Management System. His study includes a comprehensive review of related
            local and international literature, aiming to contribute to intelligent traffic optimization
            through machine learning techniques.
          </p>
          <p>
            Beyond academics, he has demonstrated involvement in student leadership as a former auditor
            mentee of the Department Student Council (DSC), where he gained experience in organizational
            processes and collaborative work.
          </p>
          <p>
            Ragadio continues to expand his technical expertise with the goal of contributing to innovative
            solutions in networking, cybersecurity, and intelligent systems.
          </p>

          <div className="about__details">
            <div className="about__detail">
              <span className="about__detail-label">Name</span>
              <span className="about__detail-value">Alfonso Santino Palma Ragadio</span>
            </div>
            <div className="about__detail">
              <span className="about__detail-label">Role</span>
              <span className="about__detail-value">Computer Engineering Student</span>
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
