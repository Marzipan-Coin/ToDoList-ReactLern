import type { Meta, StoryObj } from '@storybook/react';
import CardTable from './CardTable';


const meta: Meta<typeof CardTable> = {
    title: 'features/CardTable',
    component: CardTable,
};

export default meta;
type Story = StoryObj<typeof CardTable>;

export const TableWithOneColumn: Story = {
    args: {
        columns: [
            {
                title: 'Single Column',
                cards: [
                    {
                        id: 'card-1',
                        title: 'Card 1',
                        description: 'This is the first card',
                        status: 1,
                    },
                ],
            },
        ],
    },
};

export const TableWithMultipleColumns: Story = {
    args: {
        columns: [
            {
                title: 'Column 1',
                cards: [
                    {
                        id: 'card-1',
                        title: 'Card 1',
                        description: 'This is the first card',
                        status: 1,
                    },
                ],
            },
            {
                title: 'Column 2',
                cards: [
                    {
                        id: 'card-2',
                        title: 'Card 2',
                        description: 'This is the second card',
                        status: 2,
                    },
                ],
            },
        ],
    },
};

export const EmptyTable: Story = {
    args: {
        columns: [],
    },
};

export const TableWithFourColumns: Story = {
    args: {
        columns: [
            {
                title: 'Created',
                cards: [
                    {
                        id: 'card-1',
                        title: 'Created Card',
                        description: 'This card is in Created status',
                        status: 1,
                        onUpdate: (updatedCard) => alert('Card updated clicked'),
                    },
                    {
                        id: 'card-2',
                        title: 'Another Created Card',
                        description: 'This is another created card',
                        status: 1,
                        onUpdate: (updatedCard) => alert('Card updated clicked'),
                    },
                    {
                        id: 'card-3',
                        title: 'Created Card',
                        description: 'This card is in Created status',
                        status: 1,
                        onUpdate: (updatedCard) => alert('Card updated clicked'),
                    },
                    {
                        id: 'card-4',
                        title: 'Another Created Card',
                        description: 'This is another created card',
                        status: 1,
                        onUpdate: (updatedCard) => alert('Card updated clicked'),
                    },
                ]
            },
            {
                title: 'In Progress',
                cards: [
                    {
                        id: 'card-5',
                        title: 'In Progress Card',
                        description: 'This card is in In Progress status',
                        status: 2,
                        onUpdate: (updatedCard) => alert('Card updated clicked'),
                    },
                    {
                        id: 'card-6',
                        title: 'Another In Progress Card',
                        description: 'This is another in progress card',
                        status: 2,
                        onUpdate: (updatedCard) => alert('Card updated clicked'),
                    },
                    {
                        id: 'card-7',
                        title: 'In Progress Card',
                        description: 'This card is in In Progress status',
                        status: 2,
                        onUpdate: (updatedCard) => alert('Card updated clicked'),
                    },
                    {
                        id: 'card-8',
                        title: 'Another In Progress Card',
                        description: 'This is another in progress card',
                        status: 2,
                        onUpdate: (updatedCard) => alert('Card updated clicked'),
                    },
                ]
            },
            {
                title: 'Testing',
                cards: [
                    {
                        id: 'card-9',
                        title: 'Testing Card',
                        description: 'This card is in Testing status',
                        status: 3,
                        onUpdate: (updatedCard) => alert('Card updated clicked'),
                    },
                    {
                        id: 'card-10',
                        title: 'Another Testing Card',
                        description: 'This is another testing card',
                        status: 3,
                        onUpdate: (updatedCard) => alert('Card updated clicked'),
                    },
                    {
                        id: 'card-11',
                        title: 'Testing Card',
                        description: 'This card is in Testing status',
                        status: 3,
                        onUpdate: (updatedCard) => alert('Card updated clicked'),
                    },
                    {
                        id: 'card-12',
                        title: 'Another Testing Card',
                        description: 'This is another testing card',
                        status: 3,
                        onUpdate: (updatedCard) => alert('Card updated clicked'),
                    },
                ]
            },
            {
                title: 'Completed',
                cards: [
                    {
                        id: 'card-13',
                        title: 'Completed Card',
                        description: 'This card is in Completed status',
                        status: 4,
                        onUpdate: (updatedCard) => alert('Card updated clicked'),
                    },
                    {
                        id: 'card-14',
                        title: 'Another Completed Card',
                        description: 'This is another completed card',
                        status: 4,
                        onUpdate: (updatedCard) => alert('Card updated clicked'),
                    },
                ]
            },
        ],
    },
};