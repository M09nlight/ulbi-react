import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './PageLoader.module.scss';
import { Loader } from '@/shared/ui/deprecated/Loader';

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(styles.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};

export default PageLoader;
