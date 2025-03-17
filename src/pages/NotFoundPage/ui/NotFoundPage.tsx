import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';
import { classNames } from 'shared/lib/classNames';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.NotFoundPage, {}, [className])}>
      {t('pageNotFound')}
    </div>
  );
};

export default NotFoundPage;
