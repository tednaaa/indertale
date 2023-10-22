import { TechStack } from '@/shared/lib/tech-stack-icons';

import backendSource from '../assets/projects/backend.jpeg';
import fsrtSource from '../assets/projects/fsrt.png';
import aiAssistantSource from '../assets/projects/ai-assistant.jpg';
import urlShortenerSource from '../assets/projects/url-shortener.png';

export interface Project {
  name: string;
  sourceLink: string;
  imageLink: string;
  stack: TechStack[];
}

export const projects: Project[] = [
  {
    name: 'fsrt template',
    sourceLink: 'https://github.com/tednaaa/fsrt',
    imageLink: fsrtSource,
    stack: ['typescript', 'react', 'webpack', 'postcss', 'scss', 'jest', 'reactTestingLibrary', 'docker'],
  },
  {
    name: 'AI Assistant',
    sourceLink: 'https://github.com/tednaaa/ai-assistant',
    imageLink: aiAssistantSource,
    stack: ['typescript', 'react', 'electron', 'effector', 'vite', 'scss'],
  },
  {
    name: 'Url Shortener',
    sourceLink: 'https://github.com/tednaaa/url-shortener',
    imageLink: urlShortenerSource,
    stack: ['typescript', 'golang', 'sqlite', 'vue', 'vite', 'scss'],
  },
  {
    name: 'Boiler Store API',
    sourceLink: 'https://github.com/tednaaa/boiler-shop-api',
    imageLink: backendSource,
    stack: ['typescript', 'node', 'nest', 'postgresql', 'sequelize', 'jest'],
  },
];
