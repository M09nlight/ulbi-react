import { Counter } from '@/entities/Counter';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = ({}) => {
  const { t } = useTranslation();

  return (
    <Page data-testid={'AboutPage'}>
      {t('about')}
      <Counter />
    </Page>
  );
};

export default AboutPage;
