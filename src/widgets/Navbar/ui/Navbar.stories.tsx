import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator()],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), RouterDecorator()],
};
