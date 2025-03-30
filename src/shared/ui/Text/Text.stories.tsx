import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Text, { TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'Text', title: 'title', text: 'text' },
};
export const Error: Story = {
  args: {
    children: 'Text',
    title: 'title',
    text: 'text',
    theme: TextTheme.ERROR,
  },
};
export const OnlyTitle: Story = {
  args: { children: 'Text', title: 'title' },
};
export const OnlyText: Story = {
  args: { children: 'Text', text: 'text' },
};
export const PrimaryDark: Story = {
  args: { children: 'Text', title: 'title', text: 'text' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const OnlyTitleDark: Story = {
  args: { children: 'Text', title: 'title' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const OnlyTextDark: Story = {
  args: { children: 'Text', text: 'text' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
