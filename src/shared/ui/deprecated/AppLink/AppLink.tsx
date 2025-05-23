import { FC, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}
/**
 *
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const AppLink: FC<AppLinkProps> = memo(
  ({
    className,
    to,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps
  }) => {
    return (
      <Link
        to={to}
        className={classNames(styles.AppLink, {}, [className, styles[theme]])}
        {...otherProps}
      >
        {children}
      </Link>
    );
  },
);
