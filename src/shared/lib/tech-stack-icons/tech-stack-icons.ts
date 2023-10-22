import golangSvg from './icons/golang.svg';
import sqliteSvg from './icons/sqlite.svg';
import postgresqlSvg from './icons/postgresql.svg';
import sequelizeSvg from './icons/sequelize.svg';
import nodeSvg from './icons/node.svg';
import nestSvg from './icons/nest.svg';
import typescriptSvg from './icons/typescript.svg';
import reactSvg from './icons/react.svg';
import vueSvg from './icons/vue.svg';
import electronSvg from './icons/electron.svg';
import effectorSvg from './icons/effector.svg';
import viteSvg from './icons/vite.svg';
import webpackSvg from './icons/webpack.svg';
import scssSvg from './icons/scss.svg';
import postcssSvg from './icons/postcss.svg';
import dockerSvg from './icons/docker.svg';
import jestSvg from './icons/jest.svg';
import reactTestingLibrarySvg from './icons/react-testing-library.svg';

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
  | 'docker'
  | 'jest'
  | 'reactTestingLibrary';

export const techStackIcons: Record<TechStack, string> = {
  golang: golangSvg,
  sqlite: sqliteSvg,
  postgresql: postgresqlSvg,
  sequelize: sequelizeSvg,
  node: nodeSvg,
  nest: nestSvg,
  typescript: typescriptSvg,
  react: reactSvg,
  vue: vueSvg,
  electron: electronSvg,
  effector: effectorSvg,
  vite: viteSvg,
  webpack: webpackSvg,
  scss: scssSvg,
  postcss: postcssSvg,
  docker: dockerSvg,
  jest: jestSvg,
  reactTestingLibrary: reactTestingLibrarySvg,
};
