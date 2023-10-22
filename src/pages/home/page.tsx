import { FC } from 'react';

import { MainLayout } from '@/layouts/main';

import { AboutMe } from './components/about-me';
import { Projects } from './components/projects';
import { Contacts } from './components/contacts';

export const HomePage: FC = () => {
  return (
    <MainLayout>
      <AboutMe />
      <Projects />
      <Contacts />
    </MainLayout>
  );
};
