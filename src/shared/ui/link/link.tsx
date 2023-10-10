import { Link as RouterDomLink } from 'react-router-dom';
import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';
import { clsx } from 'clsx';

interface Props {
  to: string;
  className?: string;
  children: ReactNode;
}

export const Link: FC<Props> = ({ to, className, children }) => {
  return (
    <RouterDomLink className={clsx(styles.link, className)} to={to}>
      {children}
    </RouterDomLink>
  );
};
