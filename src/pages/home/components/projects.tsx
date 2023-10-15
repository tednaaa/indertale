import { FullscreenSection } from '@/shared/ui/fullscreen-section';

import { ProjectCard, TechStack } from './project-card';

import styles from '../styles.module.scss';

import backendSource from '../assets/backend.jpeg';
import fsrtSource from '../assets/fsrt.png';
import aiAssistantSource from '../assets/ai-assistant.jpg';
import urlShortenerSource from '../assets/url-shortener.png';

export interface Project {
  name: string;
  sourceLink: string;
  imageLink: string;
  stack: TechStack[];
}

const projects: Project[] = [
  {
    name: 'fsrt',
    sourceLink: 'https://github.com/tednaaa/fsrt',
    imageLink: fsrtSource,
    stack: ['typescript', 'react', 'webpack', 'postcss', 'scss', 'jest', 'reactTestingLibrary', 'docker', 'fsd'],
  },
  {
    name: 'AI Assistant',
    sourceLink: 'https://github.com/tednaaa/ai-assistant',
    imageLink: aiAssistantSource,
    stack: ['typescript', 'react', 'electron', 'effector', 'vite', 'scss', 'openai', 'fsd'],
  },
  {
    name: 'Url Shortener',
    sourceLink: 'https://github.com/tednaaa/url-shortener',
    imageLink: urlShortenerSource,
    stack: ['typescript', 'golang', 'sqlite', 'vue', 'vite', 'scss', 'fsd'],
  },
  {
    name: 'Boiler Store API',
    sourceLink: 'https://github.com/tednaaa/boiler-shop-api',
    imageLink: backendSource,
    stack: ['typescript', 'node', 'nest', 'postgresql', 'sequelize', 'jest'],
  },
];

export const Projects = () => {
  return (
    <FullscreenSection className={styles.projects}>
      <h2 className={styles.projectsTitle}>Projects</h2>

      <ul className={styles.projectsList}>
        {projects.map(({ name, sourceLink, imageLink, stack }) => (
          <ProjectCard key={sourceLink} name={name} sourceLink={sourceLink} imageLink={imageLink} stack={stack} />
        ))}
      </ul>
    </FullscreenSection>
  );
};
