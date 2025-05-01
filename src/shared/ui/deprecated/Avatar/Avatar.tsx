import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { CSSProperties, FC, useMemo } from 'react';
import { AppImage } from '../AppImage';
import cls from './Avatar.module.scss';
import UserIcon from '@/shared/assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}
/**
 *
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Avatar: FC<AvatarProps> = ({
  src,
  className,
  size = 100,
  alt,
  fallbackInverted,
}) => {
  const mods: Mods = {};
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size],
  );

  const fallback = <Skeleton width={size} height={size} border="50%" />;
  const errorFallback = (
    <Icon
      inverted={fallbackInverted}
      width={size}
      height={size}
      Svg={UserIcon}
    />
  );

  return (
    <AppImage
      src={src}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
      alt={alt}
      fallback={fallback}
      errorFallback={errorFallback}
    />
  );
};
