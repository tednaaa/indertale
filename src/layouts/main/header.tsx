import styles from './styles.module.scss';

import logoImage from './assets/logo.jpg';
import { Container } from '@/shared/ui/container';
import { BurgerButton } from '@/shared/ui/burger-button';
import { useState } from 'react';
import { clsx } from 'clsx';

export const Header = () => {
  const [isBurgerActive, setBurgerActive] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.container}>
          <a className={styles.logo} href="#">
            <img className={styles.logoImage} src={logoImage} alt="" />
          </a>

          <BurgerButton
            className={styles.burger}
            isOpen={isBurgerActive}
            onOpen={() => setBurgerActive((prev) => !prev)}
          />
          <nav className={clsx(styles.nav, isBurgerActive && styles.navActive)}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a className={styles.navItemLink} href="#">
                  About Me
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navItemLink} href="#">
                  Projects
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navItemLink} href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};
