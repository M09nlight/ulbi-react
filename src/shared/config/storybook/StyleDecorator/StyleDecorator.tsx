import 'app/styles/index.scss';
import { StoryFn, StoryContext } from '@storybook/react';

export const StyleDecorator = (story: StoryFn, context: StoryContext) => {
  return story(context.args, context);
};
