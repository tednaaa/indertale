import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { FullscreenSection } from '@/shared/ui/fullscreen-section';

import { projects } from '../lib/projects';
import { ProjectCard } from './project-card';

import styles from '../styles.module.scss';
import { ProjectsSliderNavigation } from './projects-slider-navigation';
import { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';

export const Projects = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <FullscreenSection className={styles.projects} id="projects">
      <h2 className={styles.projectsTitle}>Projects</h2>
      <ProjectsSliderNavigation swiper={swiper} />

      <Swiper
        modules={[Keyboard, Navigation]}
        onInit={setSwiper}
        navigation={{
          prevEl: `.${styles.projectsSliderPreviousArrow}`,
          nextEl: `.${styles.projectsSliderNextArrow}`,
          disabledClass: `.${styles.projectsSliderDisabledArrow}`,
        }}
        keyboard={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {projects.map(({ name, sourceLink, imageLink, stack }) => (
          <SwiperSlide key={sourceLink}>
            <ProjectCard name={name} sourceLink={sourceLink} imageLink={imageLink} stack={stack} />
          </SwiperSlide>
        ))}
      </Swiper>
    </FullscreenSection>
  );
};
