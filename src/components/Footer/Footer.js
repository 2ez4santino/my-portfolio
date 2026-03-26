import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>
      Designed &amp; Built by{' '}
      <span className="footer__name">Alfonso Santino P. Ragadio</span>
    </p>
    <p className="footer__copy">© {new Date().getFullYear()} All rights reserved.</p>
  </footer>
);

export default Footer;
