import type { Meta, StoryObj } from '@storybook/react';

import CountrySelect from './CountrySelect';

const meta = {
  title: 'entity/CountrySelect',
  component: CountrySelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
