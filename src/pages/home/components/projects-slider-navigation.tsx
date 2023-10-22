import { FC } from 'react';
import { Swiper as SwiperType } from 'swiper';

import styles from '../styles.module.scss';

import arrowSvg from '@/shared/assets/icons/arrow.svg';

interface Props {
  swiper: SwiperType | null;
}

export const ProjectsSliderNavigation: FC<Props> = ({ swiper }) => {
  if (!swiper) return;

  return (
    <div className={styles.projectsSliderNavigation}>
      <button className={styles.projectsSliderPreviousArrow} onClick={() => swiper.slidePrev()}>
        <img className={styles.projectsSliderPreviousArrowImage} src={arrowSvg} alt="" />
      </button>
      <button className={styles.projectsSliderNextArrow} onClick={() => swiper.slideNext()}>
        <img className={styles.projectsSliderNextArrowImage} src={arrowSvg} alt="" />
      </button>
    </div>
  );
};
