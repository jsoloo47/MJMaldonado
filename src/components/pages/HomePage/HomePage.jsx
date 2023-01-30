import React from 'react';
import WhiteHalf from './WhiteHalf/WhiteHalf.jsx';
import BlueHalf from './BlueHalf/BlueHalf';

export default function HomePage() {
  return (
    <section className="home-section">
      <WhiteHalf />
      <BlueHalf />
    </section>
  );
}
