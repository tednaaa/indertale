import { FC } from 'react';
import styles from './styles.module.scss';
import { clsx } from 'clsx';

interface Props {
  className?: string;
  isOpen: boolean;
  onOpen: () => void;
}

export const BurgerButton: FC<Props> = ({ className, isOpen, onOpen }) => {
  return (
    <button className={clsx(styles.button, isOpen && styles.buttonActive, className)} onClick={onOpen}>
      <svg className={styles.buttonSvg}>
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          className={clsx(styles.line, styles.topLine)}
          shapeRendering="crispEdges"
        />
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          className={clsx(styles.line, styles.middleLine)}
          shapeRendering="crispEdges"
        />
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          className={clsx(styles.line, styles.bottomLine)}
          shapeRendering="crispEdges"
        />
      </svg>
    </button>
  );
};
