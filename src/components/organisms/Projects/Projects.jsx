import React from 'react';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';

import './styles.css';

class Project {
  constructor(title, description, image, link, tags, id) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.link = link;
    this.tags = tags;
    this.id = id;
  }
}

const projects = [
  new Project(
    'Juice It Up Mobile App',
    'Case Study: Looking for pain points on the reward app UI',
    '#',
    '/projects/juice-it-up',
    ['Research', 'UX Design', 'Product Design'],
    'JUI'
  ),
  new Project(
    'Center for Community Engagement',
    'Market Research for Digital Messaging Strategy',
    '#',
    '/projects/cce',
    ['Market Research', 'Digital messaging', 'Copywriting'],
    'CCE'
  ),
  new Project(
    'Twinstarz User Research',
    'UX Research for the re-branding and web design of a small business, Twinstarz',
    '#',
    '/projects/twin-starz',
    ['UX Research', 'Interaction Design', 'UI Interaction'],
    'TWIN'
  ),
];

export default function Projects() {
  return (
    <section id="project-list">
      {projects.map((project) => (
        <ProjectCard
          project={project}
          key={project.id}
          flipped={project.title === 'Center for Community Engagement'}
        />
      ))}
    </section>
  );
}
