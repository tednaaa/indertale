import { Link } from 'react-router-dom';

import { FullscreenSection } from '@/shared/ui/fullscreen-section';

import styles from '../styles.module.scss';

import cvPdfSource from '../assets/cv.pdf';

export const AboutMe = () => {
  return (
    <FullscreenSection className={styles.aboutMe} id="aboutMe">
      <h2 className={styles.aboutMeTitle}>
        Hi! <br />I am Andranik
      </h2>

      <div className={styles.buttons}>
        <Link className={styles.cvButton} to={cvPdfSource} target="_blank" rel="noreferrer">
          Download CV
        </Link>
        <a className={styles.telegramLink} href="https://t.me/indertale" target="_blank" rel="noreferrer">
          Telegram
        </a>
      </div>
    </FullscreenSection>
  );
};
