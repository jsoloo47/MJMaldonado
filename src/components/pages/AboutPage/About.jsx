import React from 'react';

import profilePic from '../../../assets/aboutIMGs/selfie-aboutMe.png';
import blog from '../../../assets/aboutIMGs/blog-aboutMe.png';
import animu from '../../../assets/aboutIMGs/drawme.png';

import linkedIn from '/src/assets/socialLogos/linkedIn-000.png';
import Instagram from '/src/assets/socialLogos/insta-000.png';

import './styles.css';

export default function About() {
  return (
    <section className="about-page-container">
      <div className="about-me-hero">
        <div className="about-me-col1">
          <div className="about-me-Pic">
            <img src={profilePic} alt="A profile pic" />
          </div>
          <h1>Melanie Maldonado (She/Her)</h1>
          <p>
            Utilizing my experience in Digital Marketing, Content Creation, and
            Research to enhance User Interaction
          </p>
          <div className="col1-divider"></div>
          <span>Currently working in Ontario, CA</span>
          <div className="about-me-social-links">
            <a
              href="https://www.linkedin.com/in/melaniejmaldonado/"
              target={'_blank'}
            >
              <img src={linkedIn} alt="linkedIn logo" />
            </a>
            <a href="https://www.instagram.com/a.nimu/" target={'_blank'}>
              <img src={Instagram} alt="instagram logo" />
            </a>
          </div>
          <h3 className="skill-set-header">Skillset</h3>
          <div className="about-me-skills">
            <div className="skill-row">
              <span>Figma</span>
              <span>Hubspot</span>
              <span>Google Analytics</span>
            </div>
            <div className="skill-row">
              <span>Illustrator</span>
              <span>User Research</span>
              <span>Digital Marketing</span>
            </div>
            <div className="skill-row">
              <span>FlowMapp</span>
              <span>Wireframes</span>
              <span>Interaction Design</span>
            </div>
            <div className="skill-row">
              <span>Branding</span>
              <span>Copywriting</span>
              <span>User Journey/Flow</span>
            </div>
            <div className="skill-row">
              <span>MARVEL</span>
              <span>Microsoft 365 products</span>
              <span>SEM/SEO</span>
            </div>
            <div className="skill-row">
              <span>Content Distribution</span>
              <span>Market Research</span>
            </div>
          </div>
        </div>
        <div className="about-me-col2">
          <h1>About Me</h1>
          <span>Empathy is key</span>
          <p>
            I have a natural passion for creativity that fuels and serve as the
            basis for my journey in human-centered design. I am a listener where
            collaboration and empathy come natural to me and even consider
            myself a driven, open-minded individual that's comfortable working
            in a team.
            <br />
            <br />
            Bachelors in Business Administration specializing in Marketing
            Management + Professional experience in digital messaging, content
            campaigns and research. These experiences have allowed me to
            maximize my effectiveness in managing relationships and efficiency
            in marketing and design projects.
          </p>
          <a href="https://www.linkedin.com/in/melaniejmaldonado/overlay/1635511851835/single-media-viewer/?profileId=ACoAACReKQwBY7kwhYwgsjkUohN3_f5fLpuupdc">
            Checkout my resume
          </a>
          <div className="col2-divider"></div>
          <div className="about-me-blog-container">
            <h2>FOLLOW MY BLOG</h2>
            <span>
              Follow if you like movie recommendations and cinematography shots
            </span>
            <img src={blog} alt="Picked by Mel Blog Preview" />
            <img src={animu} alt="Mels Pic" id="animu" />
            <a href="#" className="about-me-blog-link">
              GO TO BLOG
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
