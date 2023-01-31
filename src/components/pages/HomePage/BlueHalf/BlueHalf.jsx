import React from 'react';
import ProjectImages from '../../../organisms/ProjectImages/ProjectImages';

import './styles.css';

function BlueHalf() {
  return (
    <>
      <section className="blue-half-container">
        <div className="blue_text_container">
          <div className="blue_text-left-column">
            <h1>
              copywriting, content creation, UX projects &<br /> other visuals
            </h1>
          </div>
          <div className="blue_text-right-column">
            <p className="blue_text-right-column--p">
              I try to find new ways to learn in design, from UX challenges to
              micro copy and high visuals. I strive to always look for
              improvement. Below, I have my DailyUI work, copy writing projects
              and other miscellaneous work.
            </p>
          </div>
        </div>
        <ProjectImages />
      </section>
    </>
  );
}

export default BlueHalf;
