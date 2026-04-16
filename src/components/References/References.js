import React from 'react';
import './References.css';

const references = [
  {
    name: 'Joreza Sayon',
    role: 'Research Adviser',
    organization: 'Carlos P. Romulo Senior High School',
    phone: '+63 917 555 0142',
    location: 'Quezon City, Metro Manila, Philippines',
  },
  {
    name: 'Winnona Abanto',
    role: 'Former Adviser',
    organization: 'Quezon City Academy',
    phone: '+63 918 555 2764',
    location: 'Quezon City, Metro Manila, Philippines',
  },
];

const References = () => {
  return (
    <section id="references" className="references section">
      <div className="section__header">
        <h2 className="section__title">My <span>References</span></h2>
        <div className="section__line" />
      </div>

      <p className="references__intro">
        Academic and professional contacts who can verify my work and character.
      </p>

      <div className="references__grid">
        {references.map((reference) => (
          <article key={reference.name} className="references__card">
            <h3 className="references__name">{reference.name}</h3>
            <p className="references__role">{reference.role}</p>
            <p className="references__org">{reference.organization}</p>
            <p className="references__contact">
              <span>Contact:</span> {reference.phone}
            </p>
            <p className="references__contact">{reference.location}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default References;
