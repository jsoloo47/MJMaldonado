import React from 'react';
import TextLoop from '../../molecules/TextLoop/TextLoop';

import './styles.css';

function Hero() {
  const texts = [
    'I am a UX Designer',
    'I am a Front-End Developer',
    'I value empathy & collaboration',
    'I am a curious creative',
  ];

  return (
    <div className="hero_container">
      <div className="hero_content_col1">
        <h1 className="hero_content_col1_title">Hello! I'm Melanie,</h1>
        <p className="hero_content_col1_text">
          I value empathy & collaboration
        </p>
        {/* <TextLoop text={texts} /> */}
      </div>
      <div className="divider"></div>
      <div className="hero_content_col2">
        <h1 className="hero_content_col2_text">Welcome to my portfolio</h1>
        <p>
          I am a curious creative that thrives on providing empathetic solutions
          through research and interactive design.
        </p>
        <p>Making life just a little bit easier.</p>
        <a href="#" className="hero_content_col2_link">
          Check out my work below
        </a>
      </div>
    </div>
  );
}

export default Hero;
