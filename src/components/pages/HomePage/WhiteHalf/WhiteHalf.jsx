import React from 'react';

import Hero from '../../../organisms/Hero/Hero';
import Projects from '../../../organisms/Projects/Projects';

import './styles.css';

function WhiteHalf() {
  return (
    <section className="white-half-container">
      <Hero />
      <Projects />
    </section>
  );
}

export default WhiteHalf;
