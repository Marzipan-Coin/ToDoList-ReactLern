import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';


const meta: Meta<typeof Footer> = {
  title: 'shared/Footer',
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;
export const DefaultFooter: Story = {
  args: {
    
  },
};

export const FooterWithBasicData: Story = {
  args: {
    authorName: 'Kirill Borisenko',
    year: 2025,
    copyright: 'Kirill Borisenko. All rights reserved. Possible...',
  },
};

export const FooterWithLinks: Story = {
  args: {
    authorName: 'Kirill Borisenko',
    copyright: 'Kirill Borisenko. All rights reserved. Possible...',
    year: 2025,
    links: [
        { label: 'GitHub', url: 'https://github.com/Marzipan-Coin' },
    ],
    },
};