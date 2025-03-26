import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = ({}) => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <BugButton />
      <div>{t('main')}</div>
      <Counter />
    </div>
  );
};

export default MainPage;
