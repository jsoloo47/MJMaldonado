import React from 'react';

import CCEContent from '../../../molecules/CCEContent/CCEContent';
import { motion } from 'framer-motion';

import cceCover from '../../../../assets/cce-cover.png';
import dms1 from '../../../../assets/DMS1.png';
import dms2 from '../../../../assets/DMS2.png';
import main from '../../../../assets/cce-Main.png';
import car1 from '../../../../assets/car1.png';
import car2 from '../../../../assets/car2.png';
import car3 from '../../../../assets/car3.png';

import './styles.css';
/**
 *
 * build carousel
 * ensure that the images are responsive for mobile
 */

const contentInfo = [
  {
    img: dms1,
    imgSpan: 'Graduating Engineering Majors',
    text: 'A-I-D-A Formula to keep copy flowing in a logical sequence ',
    bullet:
      'Attract attention -> Arouse Interest -> Stimulate desire -> Call for Action',
    insight: 'Focus on their need for college credit and career goals',
  },
  {
    img: dms2,
    imgSpan: 'First-Gen Freshman Students',
    text: 'P-P-P-P Formula to keep copy flowing in a logical sequence ',
    bullet: 'Picture -> Promise -> Proof -> Push',
    insight: 'Focus on the opportunity after college',
  },
];

export default function CCEPage() {
  return (
    <section className="cce-page">
      <div className="cce-whiteHalf">
        <div className="cce-overview">
          <div className="cce-overview-col1">
            <div className="cce-title">
              <h1>Center For Community Engagement</h1>
            </div>
            <h2>Challenge</h2>
            <p>
              The Center for Community Engagement (CCE) needed to gain more
              traction on Cal Poly Pomona's campus. They determined that market
              research for a new strategy would help in their messaging to
              students.
            </p>
          </div>
          <div className="cce-overview-col2">
            <img src={cceCover} alt="Project Preview" />
          </div>
        </div>
        <div className="cce-desc">
          <div className="cce-teams">
            <h2>Team</h2>
            <p>
              I led on primary and secondary research, and collaborated on
              design activities and digital messaging. Teammates roles included
              measurement goals in potential KPI measurements.
            </p>
          </div>
          <div className="divider-dotted"></div>
          <div className="cce-research-process">
            <div className="cce-research-process-col1">
              <h2>Research Process</h2>
            </div>
            <div className="cce-research-process-col2">
              <p>
                We looked to CCE's existing participants for a{' '}
                <span className="underlined">
                  segment that was substantial in size and homogeneous in needs.
                </span>
                <br /> With analyzing current CCE participants, we found that
                Engineering students in their last year of their educational
                careers and first-gen students in their first year would lead to
                the most conversion and student-oriented decision.
                <br />
                Through student workshops and secondary research (demographics
                and analysts reports),{' '}
                <span className="underlined">
                  we learned the group's setbacks and expectations when it came
                  to internships.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cce-blueBg">
        <div className="cce-blueBg-content">
          <h2 className="cce-blueBg-title">
            Market Segments for Digital Messaging Strategy
          </h2>
          <CCEContent contentInfo={contentInfo[0]} />
          <img src={main} alt="CCE Homepage" id="cce-main-img" />
          <CCEContent contentInfo={contentInfo[1]} />
          <motion.div
            className="cce-carosel"
            // Infinite loop
            initial={{ x: 0 }}
            animate={{ x: [100, 200, 300] }}
            transition={{
              duration: 4,
              repeat: 1,
              ease: 'linear',
            }}
          >
            <img src={car1} alt="" />
            <img src={car2} alt="" />
            <img src={car3} alt="" />
          </motion.div>
          <div className="cce-blueBg-summary">
            The entire team collaborated on the design for a marketing campaign
            that resonated with CPP students through its messaging theme. CCE
            campaign was largely focused on the Pomona location and created a
            theme that resonated with CPP students.
          </div>
        </div>
      </div>
      <div className="cce-contact">
        Interest in hearing more about my behind-the-scenes work? <br /> Contact
        me below for more!
      </div>
    </section>
  );
}
