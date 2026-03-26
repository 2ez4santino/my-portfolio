import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Team Portfolio',
    description: 'A collaborative portfolio website project built and maintained in GitHub.',
    tags: ['CSS'],
    github: 'https://github.com/2ez4santino/team-portfolio',
    live: null,
    featured: true,
  },
  {
    id: 2,
    title: 'Birthday Invitation',
    description: 'A styled invitation page project with custom front-end design and layout work.',
    tags: ['CSS'],
    github: 'https://github.com/2ez4santino/birthday-invitation',
    live: null,
    featured: true,
  },
  {
    id: 3,
    title: 'Cooking App',
    description: 'An Android application project focused on cooking-related mobile functionality.',
    tags: ['Kotlin'],
    github: 'https://github.com/2ez4santino/cooking-app',
    live: null,
    featured: false,
  },
  {
    id: 4,
    title: 'Interactive Login Dashboard',
    description: 'A JavaScript dashboard and authentication UI project with interactive interface elements.',
    tags: ['JavaScript'],
    github: 'https://github.com/2ez4santino/interactive-login-dashboard',
    live: null,
    featured: false,
  },
  {
    id: 6,
    title: 'React ES6 Lab',
    description: 'A React and ES6 practice repository exploring modern JavaScript and component patterns.',
    tags: ['JavaScript'],
    github: 'https://github.com/2ez4santino/react-es6-lab',
    live: null,
    featured: false,
  },
  {
    id: 7,
    title: 'Git Frontend Project',
    description: 'An HTML front-end project used for version control and Git workflow practice.',
    tags: ['HTML'],
    github: 'https://github.com/2ez4santino/git-frontend-project',
    live: null,
    featured: false,
  },
  {
    id: 8,
    title: 'Lab 3',
    description: 'A JavaScript laboratory project repository for coursework and experimentation.',
    tags: ['JavaScript'],
    github: 'https://github.com/2ez4santino/Lab-3-',
    live: null,
    featured: false,
  },
  {
    id: 9,
    title: 'Lab 3.2',
    description: 'A follow-up lab repository documenting additional coursework implementation.',
    tags: ['Coursework'],
    github: 'https://github.com/2ez4santino/Lab-3.2',
    live: null,
    featured: false,
  },
];

const filters = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

const Projects = () => {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(active));

  return (
    <section id="projects" className="projects section">
      <div className="section__header">
        <h2 className="section__title">My <span>Projects</span></h2>
        <div className="section__line" />
      </div>

      <div className="projects__filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`projects__filter-btn ${active === f ? 'active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="projects__grid">
        {filtered.map((project) => (
          <div
            className={`projects__card ${project.featured ? 'projects__card--featured' : ''}`}
            key={project.id}
          >
            {project.featured && (
              <span className="projects__featured-badge">Featured</span>
            )}
            <div className="projects__card-body">
              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-desc">{project.description}</p>
              <div className="projects__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="projects__tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="projects__card-links">
              <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub repository">
                <FaGithub /> Code
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live demo">
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
