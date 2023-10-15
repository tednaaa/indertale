import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Project } from './projects';

import styles from '../styles.module.scss';

import githubIcon from '../assets/github.svg';

export type TechStack =
  | 'golang'
  | 'sqlite'
  | 'postgresql'
  | 'sequelize'
  | 'node'
  | 'nest'
  | 'typescript'
  | 'react'
  | 'vue'
  | 'electron'
  | 'effector'
  | 'vite'
  | 'webpack'
  | 'scss'
  | 'postcss'
  | 'openai'
  | 'docker'
  | 'fsd'
  | 'jest'
  | 'reactTestingLibrary';

const stackMap: Record<TechStack, string> = {
  golang: 'https://deviconapi.vercel.app/go?version=plain&color=00ACD7ff&size=40',
  sqlite: 'https://deviconapi.vercel.app/sqlite?color=0F80CCff&size=40',
  postgresql: 'https://deviconapi.vercel.app/postgresql?color=336791ff&size=40',
  sequelize: 'https://deviconapi.vercel.app/sequelize?color=3B4B72ff&size=40',
  node: 'https://deviconapi.vercel.app/nodejs?color=83CD29ff&size=40',
  nest: 'https://deviconapi.vercel.app/nestjs?color=DF234Fff&size=40',
  typescript: 'https://deviconapi.vercel.app/typescript?version=plain&color=007ACCff&size=40',
  react: 'https://reactnative.dev/img/header_logo.svg',
  vue: 'https://deviconapi.vercel.app/vuejs?version=plain&color=41B883ff&size=40',
  electron: 'https://www.electronjs.org/assets/img/logo.svg',
  effector: 'https://effector.dev/img/comet.png',
  vite: 'https://vitejs.dev/logo.svg',
  webpack: 'https://deviconapi.vercel.app/webpack?color=1C78C0ff&size=40',
  scss: 'https://sass-lang.com/assets/img/logos/logo.svg',
  postcss:
    'https://camo.githubusercontent.com/a2ebaaedf9af41416a2717b3a28f405b39535397f4463c5c5119146c84c240f9/68747470733a2f2f706f73746373732e6f72672f6c6f676f2e737667',
  openai: 'https://chat.openai.com/apple-touch-icon.png',
  docker: 'https://deviconapi.vercel.app/docker?version=plain&color=019BC6ff&size=40',
  fsd: 'https://feature-sliced.design/img/brand/logo-primary.png',
  jest: 'https://deviconapi.vercel.app/jest?color=99425Bff&size=40',
  reactTestingLibrary: 'https://testing-library.com/img/octopus-64x64.png',
};

export const ProjectCard: FC<Project> = ({ name, sourceLink, imageLink, stack }) => {
  return (
    <li>
      <Link className={styles.projectCard} to={sourceLink} target="_blank">
        <img className={styles.projectCardImage} src={imageLink} alt="" />

        <div className={styles.projectCardInfo}>
          <h4 className={styles.projectCardTitle}>{name}</h4>
          <img className={styles.githubIcon} src={githubIcon} alt="" />
        </div>

        <ul className={styles.projectCardStackList}>
          {stack.map((name) => (
            <li className={styles.projectCardStackListItem} key={name}>
              <img className={styles.projectCardStackListImage} src={stackMap[name]} alt="" />
            </li>
          ))}
        </ul>
      </Link>
    </li>
  );
};
