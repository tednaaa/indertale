import { FC, Ref } from 'react';

import arrowSvg from '@/shared/assets/icons/arrow.svg';

import styles from '../styles.module.scss';

interface Props {
  sliderPreviousButtonRef: Ref<HTMLButtonElement>;
  sliderNextButtonRef: Ref<HTMLButtonElement>;
}

export const ProjectsSliderNavigation: FC<Props> = ({ sliderPreviousButtonRef, sliderNextButtonRef }) => {
  return (
    <div className={styles.projectsSliderNavigation}>
      <button ref={sliderPreviousButtonRef} className={styles.projectsSliderPreviousArrow}>
        <img className={styles.projectsSliderPreviousArrowImage} src={arrowSvg} alt="" />
      </button>
      <button ref={sliderNextButtonRef} className={styles.projectsSliderNextArrow}>
        <img className={styles.projectsSliderNextArrowImage} src={arrowSvg} alt="" />
      </button>
    </div>
  );
};
