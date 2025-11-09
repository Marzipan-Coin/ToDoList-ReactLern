import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';


const meta: Meta<typeof Header> = {
  title: 'shared/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;
export const DefaultHeader: Story = {
  args: {
    title: 'My Header',
  },
};

export const HeaderWithLogo: Story = {
  args: {
    title: 'My Header with Logo',
    logoUrl: 'https://example.com/logo.png',
  },
};

export const HeaderWithCreateCardAction: Story = {
  args: {
    title: 'Header with Create Card Action',
    onCreateCard: () => alert('Create Card clicked'),
  },
};