import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation } from 'swiper/modules';
import { NavigationOptions, Swiper as SwiperType } from 'swiper/types';

import { FullscreenSection } from '@/shared/ui/fullscreen-section';

import { projects } from '../lib/projects';
import { ProjectCard } from './project-card';
import { ProjectsSliderNavigation } from './projects-slider-navigation';

import 'swiper/css';
import styles from '../styles.module.scss';

export const Projects = () => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  const handleSliderBeforeInit = (swiper: SwiperType) => {
    if (!swiper.params) return;

    const navigation = swiper.params.navigation as NavigationOptions;

    navigation.prevEl = navigationPrevRef.current;
    navigation.nextEl = navigationNextRef.current;

    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
  };

  return (
    <FullscreenSection className={styles.projects} id="projects">
      <h2 className={styles.projectsTitle}>Projects</h2>
      <ProjectsSliderNavigation sliderPreviousButtonRef={navigationPrevRef} sliderNextButtonRef={navigationNextRef} />

      <Swiper
        modules={[Keyboard, Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={handleSliderBeforeInit}
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
