import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';


const meta: Meta<typeof Card> = {
  title: 'features/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Status_1_Card: Story = {
  args: {
    title: 'Created Card',
    description: 'this is created card',
    status: 1,
    id: 'card-1',
    onUpdate: (updatedCard) => alert('Card updated clicked'),
  },
};

export const Status_2_Card: Story = {
  args: {
    title: 'In Progress Card',
    description: 'this is in progress card',
    status: 2,
    id: 'card-2',
    onUpdate: (updatedCard) => alert('Card updated clicked'),
  },
};

export const Status_3_Card: Story = {
  args: {
    title: 'Testing Card',
    description: 'this is testing card',
    status: 3,
    id: 'card-3',
    onUpdate: (updatedCard) => alert('Card updated clicked'),
  },
};

export const Status_4_Card: Story = {
  args: {
    title: 'Completed Card',
    description: 'this is completed card',
    status: 4,
    id: 'card-4',
    onUpdate: (updatedCard) => alert('Card updated clicked'),
  },
};

export const Long_Description_Card: Story = {
  args: {
    title: 'Card with Long Description',
    description: 'This is a card with a very long description to test how the card component handles overflow and text wrapping. The description goes on and on, providing ample content to see if the layout remains intact and visually appealing even when there is a lot of text to display within the card component.',
    status: 2,
    id: 'card-5',
    onUpdate: (updatedCard) => alert('Card updated clicked'),
  },
};

export const Empty_Title_Card: Story = {
  args: {
    title: '',
    description: 'This card has an empty title to test how the component handles missing titles.',
    status: 3,
    id: 'card-6',
    onUpdate: (updatedCard) => alert('Card updated clicked'),
  },
};

export const Empty_Description_Card: Story = {
  args: {
    title: 'Card with Empty Description',
    description: '',
    status: 1,
    id: 'card-7',
    onUpdate: (updatedCard) => alert('Card updated clicked'),
  },
};

export const Special_Characters_Card: Story = {
  args: {
    title: 'Special Characters !@#$%^&*()',
    description: 'This card contains special characters in both the title and description to test rendering: ~`<>?/|\\{}[]',
    status: 4,
    id: 'card-8',
    onUpdate: (updatedCard) => alert('Card updated clicked'),
  },
};

export const Very_Long_Title_Card: Story = {
  args: {
    title: 'This is a Very Long Title to Test How the Card Component Handles Overflow in the Title Section',
    description: 'Short description.',
    status: 2,
    id: 'card-9',
    onUpdate: (updatedCard) => alert('Card updated clicked'),
  },
};
