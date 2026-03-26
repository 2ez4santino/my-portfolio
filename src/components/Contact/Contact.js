import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your preferred form submission (EmailJS, Formspree, etc.)
    console.log('Form submitted:', formData);
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const socials = [
    { icon: <FaEnvelope />, label: 'Email', href: 'mailto:masragadio@tip.edu.ph', value: 'masragadio@tip.edu.ph' },
    { icon: <FaGithub />,   label: 'GitHub',   href: 'https://github.com/2ez4santino',   value: 'github.com/2ez4santino' },
    { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com', value: 'linkedin.com/in/alfonso' },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="section__header">
        <h2 className="section__title">Get In <span>Touch</span></h2>
        <div className="section__line" />
      </div>

      <p className="contact__intro">
        I'm currently open to new opportunities. Whether you have a question,
        a project idea, or just want to say hi — my inbox is always open!
      </p>

      <div className="contact__container">
        {/* Info column */}
        <div className="contact__info">
          <h3>Let's work together</h3>
          <p>
            Feel free to reach out through the form or via any of the channels below.
            I'll get back to you as soon as possible.
          </p>
          <div className="contact__socials">
            {socials.map(({ icon, label, href, value }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="contact__social-item">
                <span className="contact__social-icon">{icon}</span>
                <div>
                  <span className="contact__social-label">{label}</span>
                  <span className="contact__social-value">{value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form column */}
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn--primary contact__submit">
            Send Message
          </button>

          {sent && (
            <p className="contact__success">
              Message sent! I'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
