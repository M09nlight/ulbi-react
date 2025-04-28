import { FC } from 'react';
import styles from './PageError.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';

interface PageErrorProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <p>{t('someError')}</p>
      <Button onClick={reloadPage}>{t('reloadPage')}</Button>
    </div>
  );
};

export default PageError;
