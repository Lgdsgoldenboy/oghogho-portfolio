import React from 'react';
import { projects } from '../data';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

const WorkSection: React.FC = () => (
  <section id="work">
    <SectionHeader num="01 — SELECTED WORK" title="Projects" />
    {projects.map((p, i) => <ProjectCard key={p.id} project={p} idx={i} />)}
  </section>
);

export default WorkSection;