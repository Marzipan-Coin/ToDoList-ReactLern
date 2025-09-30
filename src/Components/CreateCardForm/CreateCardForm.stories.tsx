import type { Meta, StoryObj } from '@storybook/react-webpack5';

import CreateCardForm from './CreateCardForm';

const meta = {
  component: CreateCardForm,
} satisfies Meta<typeof CreateCardForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => { alert("Form closed") }
  }
};