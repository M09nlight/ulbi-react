import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Page from 'widgets/Page/ui/Page';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = ({}) => {
  const { t, i18n } = useTranslation();
  return (
    <Page>
      <BugButton />
      <div>{t('main')}</div>
      <Counter />
    </Page>
  );
};

export default MainPage;
