import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './styles.css';

function Example({ text, index }) {
  return (
    <div className="textloop">
      <AnimatePresence>
        <motion.p
          key={index}
          className="hero_content_col1_text"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -200 }}
        >
          {text}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function Hero() {
  const texts = [
    'I studied in marketing, research & messaging',
    'I value empathy & collaboration',
    'I am a huge Marvel Universe fan',
    'Seriously, I really love Marvel',
    'I am a certified Wine and Beverage Specialist',
    'I speak English and Spanish fluently',
    'I like to write about my favorite cinematic experiences',
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts]);

  return (
    <>
      <div className="hero_container">
        <div className="hero_content_col1">
          <h1 className="hero_content_col1_title">Hello! I'm Melanie,</h1>
          <Example text={texts[index]} index={index} />
        </div>
        <div className="divider"></div>
        <div className="hero_content_col2">
          <h1 className="hero_content_col2_text">Welcome to my portfolio</h1>
          <p>
            I am a curious creative that thrives on providing empathetic
            solutions through research and interactive design.
          </p>
          <p>Making life just a little bit easier.</p>
          <a href="#" className="hero_content_col2_link">
            How can I help you?
          </a>
        </div>
      </div>
      <div className="checkout-container">
        <a href="#project-list" className="check-out">
          Check out my work below
          <div className="arrows">
            <div className="arrow a1"></div>
            <div className="arrow a2"></div>
            <div className="arrow a3"></div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Hero;
