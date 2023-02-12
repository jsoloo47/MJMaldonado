import React from 'react';
// Motion Framer import
import { motion } from 'framer-motion';

import Tag from '../../atoms/Tag/Tag';
import JUI1 from '/src/assets/PCImgs/JUI1.svg';
import JUI2 from '/src/assets/PCImgs/JUI2.svg';
import CCE from '/src/assets/PCImgs/CCE.svg';
import TWIN from '/src/assets/PCImgs/TWIN.svg';

import './styles.css';

export default function ProjectCard({ project }) {
  let img;
  switch (project.id) {
    case 'JUI':
      img = (
        <>
          <img src={JUI1} alt={project.title} />
          <img src={JUI2} alt={project.title} />
        </>
      );
      break;
    case 'CCE':
      img = <img src={CCE} alt={project.title} />;
      break;
    case 'TWIN':
      img = <img src={TWIN} alt={project.title} />;
      break;
    default:
      img = <img src={JUI1} alt={project.title} />;
  }
  return (
    <motion.a
      className={'project-card ' + project.id + '-content'}
      whileHover={{
        scale: 1.04,
        transition: { duration: 0.2 },
        height: '300px',
      }}
      href={project.link}
    >
      <div className="project-card__content ">
        <h2 className="project-card__title">{project.title}</h2>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag, i) => (
            <Tag tag={tag} key={i} />
          ))}
        </div>
      </div>
      <div className={'project-card__image ' + project.id}>{img}</div>
    </motion.a>
  );
}
