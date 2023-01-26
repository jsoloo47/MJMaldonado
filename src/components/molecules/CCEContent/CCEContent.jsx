import React from 'react';

import './styles.css';

export default function CCEContent({ contentInfo }) {
  console.log(contentInfo.img);
  return (
    <div className="cce-project-info">
      <div className="cce-project-img">
        <span>{contentInfo.imgSpan}</span>
        <img src={contentInfo.img} alt={contentInfo.imgSpan} />
      </div>
      <div className="cce-project-info-text">
        <span>Message Strategy:</span>
        <p>{contentInfo.text}</p>
        <ul>
          <li className="bullet">{contentInfo.bullet}</li>
        </ul>
        <div className="cce-project-info-insight">
          Insight: {contentInfo.insight}
        </div>
      </div>
    </div>
  );
}
