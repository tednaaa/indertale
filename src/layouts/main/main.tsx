import { FC, ReactNode } from 'react';

import { Header } from './header';

import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.content}>{children}</div>
    </div>
  );
};
