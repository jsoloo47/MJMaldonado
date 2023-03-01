import React from 'react';

import './styles.css';

export default function Services() {
  return (
    <div className="services-container">
      <div className="header-container">
        <div className="header-col1">
          Freelance design work,
          <br />
          marketing contracts & more
        </div>
        <div className="header-col2">
          I have been hired by various clients to create various design
          elements, landing pages and marketing optimization . I enjoy working
          in new teams, understanding their processes and contributing to
          solutions.
        </div>
      </div>
      <span className="services-title">Services</span>
      <div style={{ border: '.7px solid white' }}></div>
      <div className="services-content-grid">
        <div className="grid-item">
          <a href="#">
            <div className="grid-item-content">
              <h2>01</h2>
              <h3>Interaction Design (UX/UI)</h3>
              <p>
                As a designer with a marketing background and strong
                understanding of user interaction, I am equipped to act as a
                bridge between user and company goals. I use quantitative
                thinking to research, empathize and conceptualize to make
                informed choices.
              </p>
            </div>
          </a>
        </div>
        <div className="grid-item">
          <a href="src/assets/PDFs/MarketingProfile.pdf">
            <div className="grid-item-content">
              <h2>02</h2>
              <h3>Marketing</h3>
              <p>
                I help businesses make an impression online. Alongside my
                bachelors in Marketing Management, I am proficient in all
                aspects of digital marketing from generating leads to content
                marketing; social media posts to supporting marketing campaigns.
              </p>
            </div>
          </a>
        </div>
        <div className="grid-item">
          <a href="src/assets/PDFs/Branding.pdf">
            <div className="grid-item-content">
              <h2>03</h2>
              <h3>Branding</h3>
              <p>
                I deliver branding kits, ensuring that company culture,
                positioning, voice, messaging and visual identity experiences
                are absolutely consistent. My process involves studying your
                company, focusing on metrics that boost financial goals and
                steer business results overall.
              </p>
            </div>
          </a>
        </div>
        <div className="grid-item">
          <a href="src/assets/PDFs/ContentWritingCreation.pdf">
            <div className="grid-item-content">
              <h2>04</h2>
              <h3>Content Writing</h3>
              <p>
                My craft for compelling content stems from my passion for
                storytelling. I strive to create accurate narrative pieces with
                consistent messaging across multiple channels with on-page SEO
                for any website content, company profiles, product descriptions
                and more.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
