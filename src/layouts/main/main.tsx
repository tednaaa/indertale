import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';
import { Header } from './header';

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
