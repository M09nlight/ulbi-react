import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';
import { classNames } from 'shared/lib/classNames';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = ({
  className,
  to,
  theme = AppLinkTheme.PRIMARY,
  children,
  ...otherProps
}) => {
  return (
    <Link
      to={to}
      className={classNames(styles.appLink, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
