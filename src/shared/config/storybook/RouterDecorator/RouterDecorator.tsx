import { StoryFn, StoryContext } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator =
  () => (story: StoryFn, context: StoryContext) => {
    return <BrowserRouter>{story(context.args, context)}</BrowserRouter>;
  };
