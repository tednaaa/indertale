import { FC } from 'react';

import { MainLayout } from '@/layouts/main';
import { Container } from '@/shared/ui/container';

import styles from './styles.module.scss';
import { Button } from '@/shared/ui/button';

export const HomePage: FC = () => {
  return (
    <MainLayout>
      <div className={styles.backgroundImage}>
        <Container>
          <div className={styles.container}>
            <h1 className={styles.title}>
              Hi! <br />I am Andranik
            </h1>

            <div className={styles.buttons}>
              <Button
                className={styles.cvButton}
                onClick={() => {
                  console.log('fsakfas');
                }}
              >
                Download CV
              </Button>
              <a
                className={styles.telegramLink}
                href="https://t.me/indertale"
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
};
