import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Avatar from './Avatar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AvatarImg from './AvatarImg.jpg';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: AvatarImg,
    size: 150,
  },
};

Primary.decorators = [ThemeDecorator(Theme.DARK)];
