import { CSSProperties, FC, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

const Avatar: FC<AvatarProps> = ({ src, className, size, alt }) => {
  const mods: Mods = {};
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size]
  );
  return (
    <img
      src={src}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
      alt={alt}
    />
  );
};

export default Avatar;
