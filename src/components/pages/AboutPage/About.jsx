import React, { useState } from 'react';

import profilePic from '../../../assets/aboutIMGs/group29.png';
import skills from '../../../assets/aboutIMGs/group51.png';
import blog from '../../../assets/aboutIMGs/blog-aboutMe.png';
import animu from '../../../assets/aboutIMGs/drawme.png';
import linkedIn from '/src/assets/socialLogos/linkedIn.svg';
import Instagram from '/src/assets/socialLogos/Instagram.svg';

import './styles.css';

export default function About() {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <section className="about-page-container">
      <div className="about-me-hero">
        <div className="about-me-col1">
          <img src={profilePic} alt="A profile pic" />
          <div className="about-me-social-links">
            <a href="#">
              <img src={linkedIn} alt="linkedIn logo" />
            </a>
            <a href="#">
              <img src={Instagram} alt="instagram logo" />
            </a>
          </div>
        </div>
        <div className="about-me-col2">
          <h1>About Me</h1>
          <span>Currently working in Ontario, CA</span>

          <p>
            My name is Melanie Maldonado, but call me Mel for short.
            <br />
            <br />
            I have a natural passion for creativity that fuels and serve as the
            basis for my journey in human-centered design.
            <br />
            <br />
            I am a listener where collaboration and empathy come natural to me
            and even consider myself a driven, open-minded individual that's
            comfortable working in a team.
            <br />
            <br />
            Further, I graduated with a Bachelors in Business Administration
            specializing in Marketing Management alongside professional
            experience in digital messaging, front-end sales, and research.
            These experiences have allowed me to maximize my effectiveness in
            managing relationships and efficiency in marketing and design
            projects.
          </p>
          <a href="/resume">Checkout my resume</a>
        </div>
      </div>
      <h2 className="about-me-skillset">Skillset</h2>
      <div className="skillset-container">
        <div className="skillset-content">
          <img src={skills} alt="" />
          <div
            className={
              toggle ? 'skillset-load-more toggled' : 'skillset-load-more'
            }
            onClick={() => setToggle(!toggle)}
          >
            LOAD MORE
          </div>
        </div>
      </div>
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
    </section>
  );
}
