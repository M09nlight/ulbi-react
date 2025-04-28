import { BugButton } from '@/app/providers/ErrorBoundary';
import { Counter } from '@/entities/Counter';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/ListBox/ListBox';
import { HStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entities/Rating';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = ({}) => {
  const { t, i18n } = useTranslation();
  return (
    <Page>
      <BugButton />
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
    </Page>
  );
};

export default MainPage;
