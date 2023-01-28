import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './styles.css';

export default function TextLoop({ text }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % text.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [text, index]);

  return (
    <div className="textloop">
      <p className="hero_content_col1_text"></p>
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: -100, opacity: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,

          repeatDelay: 2,
        }}
        className="hero_content_col1_text"
      >
        {text[index]}
      </motion.div>
    </div>
  );
}
