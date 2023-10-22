import { Link } from 'react-router-dom';

import { FullscreenSection } from '@/shared/ui/fullscreen-section';

import styles from '../styles.module.scss';

import linkedinSvg from '../assets/contacts/linkedin.svg';
import githubSvg from '../assets/contacts/github.svg';
import telegramSvg from '../assets/contacts/telegram.svg';
import notionSvg from '../assets/contacts/notion.svg';
import upworkSvg from '../assets/contacts/upwork.svg';
import wakatimeSvg from '../assets/contacts/wakatime.svg';
import gmailSvg from '../assets/contacts/gmail.svg';
import leetcodeSvg from '../assets/contacts/leetcode.svg';

interface Contact {
  label: string;
  link: string;
  icon: string;
}

const contacts: Contact[] = [
  { label: 'LinkedIn', icon: linkedinSvg, link: 'https://www.linkedin.com/in/tednaaa' },
  { label: 'Gmail', icon: gmailSvg, link: 'mailto:tednaaa@gmail.com' },
  { label: 'Telegram', icon: telegramSvg, link: 'https://t.me/indertale' },
  { label: 'GitHub', icon: githubSvg, link: 'https://github.com/tednaaa' },
  { label: 'Notion', icon: notionSvg, link: 'https://www.notion.so/tednaaa/CV-6ced5bba879743e9954b633efaa4be5c' },
  { label: 'Upwork', icon: upworkSvg, link: 'https://upwork.com/freelancers/andranikg4' },
  { label: 'Wakatime', icon: wakatimeSvg, link: 'https://wakatime.com/tednaaa' },
  { label: 'Leetcode', icon: leetcodeSvg, link: 'https://leetcode.com/tednaaa' },
];

export const Contacts = () => {
  return (
    <FullscreenSection className={styles.contacts} id="contacts">
      <h2 className={styles.contactsTitle}>Contacts</h2>

      <ul className={styles.contactsList}>
        {contacts.map(({ label, link, icon }) => (
          <li className={styles.contactItem} key={label}>
            <Link className={styles.contactItemLink} to={link} target="_blank">
              <span className={styles.contactItemLabel}>{label}</span>
              <img className={styles.contactItemImage} src={icon} alt="" />
            </Link>
          </li>
        ))}
      </ul>
    </FullscreenSection>
  );
};
