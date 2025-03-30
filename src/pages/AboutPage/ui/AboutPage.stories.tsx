import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    RouterDecorator(),
    // StoreDecorator({
    //   loginForm: { username: '123', password: '123', error: 'error' },
    // }),
  ],
};

export const Secondary: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    // RouterDecorator(),
    // StoreDecorator({
    //   loginForm: { username: '123', password: '123', error: 'error' },
    // }),
  ],
};
