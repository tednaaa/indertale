import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';
import { Container } from '../container';

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const FullscreenSection: FC<Props> = ({ children, className, id }) => {
  return (
    <section id={id} className={clsx(styles.wrapper, className)}>
      <Container>{children}</Container>
    </section>
  );
};
