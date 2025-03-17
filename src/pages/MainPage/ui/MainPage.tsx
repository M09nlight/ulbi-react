import { BugButton } from 'app/providers/ErrorBoundary';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = ({}) => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <BugButton />
      <div>{t('main')}</div>
    </div>
  );
};

export default MainPage;
