import type { Meta, StoryObj } from '@storybook/react-webpack5';

import ModalWindow from './ModalWindow';
    
const meta = {
  component: ModalWindow,
} satisfies Meta<typeof ModalWindow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EmptyModalWindow: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    children: null
  }
};

export const ModalWindowWithTextContent: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    children: <div>Modal Content</div>
  }
};

export const ClosedModalWindow: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    children: null
  }
};

export const ModalWindowWithFormContent: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    children: (
      <form className="p-4">
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input type="text" id="name" className="border p-2 mb-4 w-full" />

        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input type="email" id="email" className="border p-2 mb-4 w-full" />

        <button type="submit" className="bg-blue-500 text-white p-2">
          Submit
        </button>
      </form>
    )
  }
};