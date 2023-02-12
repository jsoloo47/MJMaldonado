import React from 'react';

import linkedIn from '/src/assets/socialLogos/linkedIn-000.png';
import Instagram from '/src/assets/socialLogos/insta-000.png';

import './styles.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-links-container">
        <a
          className="social-link-bg"
          href="https://www.linkedin.com/in/melaniejmaldonado/"
          target={'_blank'}
        >
          <img src={linkedIn} alt="linkedIn logo" />
        </a>
        <a
          className="social-link-bg"
          href="https://www.instagram.com/a.nimu/"
          target={'_blank'}
        >
          <img src={Instagram} alt="instagram logo" />
        </a>
      </div>
    </footer>
  );
}
