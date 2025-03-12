import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = ({}) => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div>{t('main')}</div>
      <div>{t('sadasdsa')}</div>
    </div>
  );
};

export default MainPage;
