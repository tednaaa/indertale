import { FC, MouseEventHandler, ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

interface Props {
  className: string;
  children?: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<Props> = ({ className, children, onClick }) => {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};
