import { FC } from 'react';

import { MainLayout } from '@/layouts/main';

import { AboutMe } from './components/about-me';
import { Projects } from './components/projects';

export const HomePage: FC = () => {
  return (
    <MainLayout>
      <AboutMe />
      <Projects />
    </MainLayout>
  );
};
