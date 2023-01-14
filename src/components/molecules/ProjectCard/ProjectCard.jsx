import React from 'react';
import Tag from '../../atoms/Tag/Tag';
import JUI1 from '/src/assets/JUI1.svg';
import JUI2 from '/src/assets/JUI2.svg';
import CCE from '/src/assets/CCE.svg';
import TWIN from '/src/assets/TWIN.svg';
import './styles.css';

export default function ProjectCard({ project, flipped }) {
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
    <div className={flipped ? 'project-card flipped' : 'project-card'}>
      <div className={'project-card__image ' + project.id}>{img}</div>
      <div className="project-card__content">
        <h2 className="project-card__title">{project.title}</h2>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag, i) => (
            <Tag tag={tag} key={i} />
          ))}
        </div>
        <a className="project-card__link" href={project.link}>
          READ MORE
        </a>
      </div>
    </div>
  );
}
