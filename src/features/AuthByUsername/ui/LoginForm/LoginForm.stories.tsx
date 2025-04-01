import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import LoginForm from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onSuccess: fn() },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { username: '123', password: '123' },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};
export const WithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { username: '123', password: '123', error: 'error' },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};
export const WithLoading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { username: '123', password: '123', isLoading: true },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};
