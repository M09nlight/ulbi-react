import { FC } from 'react';
import './Loader.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames('lds-roller', {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
