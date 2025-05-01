import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { ListBox } from '@/shared/ui/deprecated/Popups';
import { RatingCard } from '@/entities/Rating';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = ({}) => {
  const { t, i18n } = useTranslation();
  return (
    <Page data-testid="MainPage">
      {/* <BugButton /> */}
      <div>{t('main')}</div>
      <Counter />
      <HStack>
        <div>sasa</div>
        <ListBox
          defaultValue="choose value"
          onChange={(value) => console.log(value)}
          value={undefined}
          items={[
            { content: 'first', value: '1' },
            { content: 'second', value: '2' },
            { content: 'third', value: '3' },
          ]}
        />
      </HStack>
      <RatingCard title="title" feedbackTitle="feedbackTitle" hasFeedback />
      <RatingCard title="title" feedbackTitle="feedbackTitle" hasFeedback />
    </Page>
  );
};

export default MainPage;
