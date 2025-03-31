import { Counter } from 'entities/Counter';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      {t('about')}
      <Counter />
    </div>
  );
};

export default AboutPage;
