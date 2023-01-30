import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';

import Gallery from 'react-photo-gallery';

import useWindowSize from '../../atoms/WindowSize/useWindowSize.jsx';

import sentenceS from '../../../assets/ProjectImages/sentenceS.svg';
import img2 from '../../../assets/ProjectImages/img2.svg';
import img3 from '../../../assets/ProjectImages/img3.svg';
import img4 from '../../../assets/ProjectImages/img4.svg';
import img5 from '../../../assets/ProjectImages/img5.svg';
import img6 from '../../../assets/ProjectImages/img6.svg';
import img7 from '../../../assets/ProjectImages/img7.svg';
import img8 from '../../../assets/ProjectImages/img8.svg';
import img9 from '../../../assets/ProjectImages/img9.svg';
import img10 from '../../../assets/ProjectImages/img10.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './styles.css';

export default function ProjectImages() {
  const { width, height } = useWindowSize();
  const [carousel, setCarousel] = useState(width < 1209);

  useEffect(() => {
    setCarousel(width < 1209);
  }, [width]);

  return (
    <>
      <section className="blue-half-img-container">
        <div className="flex-row">
          <img src={sentenceS} />
          <img src={img2} />
        </div>
        <div className="flex-row">
          <img src={img3} />
          <img src={img4} />
        </div>
        <div className="flex-row">
          <img src={img5} />
          <img src={img6} />
        </div>
        <div className="flex-row">
          <img src={img7} />
          <img src={img8} />
        </div>
        <div className="flex-row">
          <img src={img9} />
          <img src={img10} />
        </div>
      </section>
    </>
  );
}
