import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Modal from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'Text', isOpen: true },
};
export const Dark: Story = {
  args: { children: 'Text', isOpen: true },
  decorators: [ThemeDecorator(Theme.DARK)],
};
