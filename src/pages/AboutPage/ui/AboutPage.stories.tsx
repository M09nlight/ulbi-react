import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from 'app/providers/ThemeProvider';

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
  decorators: [ThemeDecorator(Theme.DARK), RouterDecorator()],
};

export const Secondary: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), RouterDecorator()],
};
