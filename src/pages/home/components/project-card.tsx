import { FC } from 'react';
import { Link } from 'react-router-dom';

import { techStackIcons } from '@/shared/lib/tech-stack-icons';

import { Project } from '../lib/projects';

import styles from '../styles.module.scss';

import githubIcon from '../assets/github.svg';

export const ProjectCard: FC<Project> = ({ name, sourceLink, imageLink, stack }) => {
  return (
    <Link className={styles.projectCard} to={sourceLink} target="_blank">
      <div className={styles.projectCardContainer}>
        <img className={styles.projectCardImage} src={imageLink} alt="" />

        <div className={styles.projectCardInfo}>
          <h4 className={styles.projectCardTitle}>{name}</h4>
          <img className={styles.githubIcon} src={githubIcon} alt="" />
        </div>
      </div>

      <ul className={styles.projectCardStackList}>
        {stack.map((name) => (
          <li className={styles.projectCardStackListItem} key={name}>
            <img className={styles.projectCardStackListImage} src={techStackIcons[name]} alt="" />
          </li>
        ))}
      </ul>
    </Link>
  );
};
