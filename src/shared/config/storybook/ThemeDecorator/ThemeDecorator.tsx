import 'app/styles/index.scss';
import { StoryFn, StoryContext } from '@storybook/react';

export const ThemeDecorator =
  (theme: string) => (story: StoryFn, context: StoryContext) => {
    return <div className={`app ${theme}`}>{story(context.args, context)}</div>;
  };
