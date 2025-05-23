import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <Page
      className={classNames(styles.NotFoundPage, {}, [className])}
      data-testid="NotFoundPage"
    >
      {t('pageNotFound')}
    </Page>
  );
};

export default NotFoundPage;
