import { Counter } from '@/entities/Counter';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Page from '@/widgets/Page/ui/Page';

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = ({}) => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('about')}
      <Counter />
    </Page>
  );
};

export default AboutPage;
