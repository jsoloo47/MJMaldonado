import React, { useState, useEffect } from 'react';

import sentenceS from '../../../assets/ProjectImages/sentenceS.svg';
import img2 from '../../../assets/ProjectImages/img2.png';
import img3 from '../../../assets/ProjectImages/img3.svg';
import img4 from '../../../assets/ProjectImages/img4.svg';
import img5 from '../../../assets/ProjectImages/img5.png';
import img6 from '../../../assets/ProjectImages/img6.svg';
import img7 from '../../../assets/ProjectImages/img7.svg';
import img8 from '../../../assets/ProjectImages/img8.svg';
import img9 from '../../../assets/ProjectImages/img9.svg';
import img10 from '../../../assets/ProjectImages/img10.svg';

import './styles.css';

export default function ProjectImages() {
  return (
    <>
      <section className="blue-half-img-container">
        <div className="flex-row">
          <img src={sentenceS} className="img-fluid" />
          <img
            src={img2}
            className="img-fluid"
            style={{ width: 'min(280px, auto)', maxHeight: '499px' }}
          />
        </div>
        <div className="flex-row">
          <img src={img3} className="img-fluid" />
          <img src={img4} className="img-fluid" />
        </div>
        <div className="flex-row">
          <img
            src={img5}
            className="img-fluid"
            style={{ width: 'min(580px, auto)', maxHeight: '421px' }}
          />
          <img src={img6} className="img-fluid" />
        </div>
        <div className="flex-row">
          <img src={img7} className="img-fluid" />
          <img src={img8} className="img-fluid" />
        </div>
        <div className="flex-row">
          <img src={img9} className="img-fluid" />
          <img src={img10} className="img-fluid" />
        </div>
      </section>
    </>
  );
}
