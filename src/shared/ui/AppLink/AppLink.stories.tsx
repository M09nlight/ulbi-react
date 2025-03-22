import type { Meta, StoryObj } from '@storybook/react';
import AppLink, { AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'widget/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    to: '/',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'test',
  },
  decorators: [ThemeDecorator(Theme.DARK), RouterDecorator()],
};

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: 'test',
  },
  decorators: [ThemeDecorator(Theme.DARK), RouterDecorator()],
};
