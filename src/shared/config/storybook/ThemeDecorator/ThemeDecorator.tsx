import 'app/styles/index.scss';
import { StoryFn, StoryContext } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator =
  (theme: Theme) => (story: StoryFn, context: StoryContext) => {
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>{story(context.args, context)}</div>
      </ThemeProvider>
    );
  };
