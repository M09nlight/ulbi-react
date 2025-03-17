import { FC } from 'react';
import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink
          to={'/'}
          className={styles.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          Главная
        </AppLink>
        <AppLink
          to={'/about'}
          className={styles.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          О сайте
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
