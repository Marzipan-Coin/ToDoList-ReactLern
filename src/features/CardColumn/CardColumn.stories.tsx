import type { Meta, StoryObj } from '@storybook/react';
import CardColumn from './CardColumn';
import { CardBaseProperties } from '../../shared/types/CardTypes';
import { CardProperties } from '../Card/Card.types';


const meta: Meta<typeof CardColumn> = {
    title: 'features/CardColumn',
    component: CardColumn,
};

export default meta;
type Story = StoryObj<typeof CardColumn>;

export const ColumnWithOneCard: Story = {
    args: {
        title: 'One Card Column',
        cards: [
            {
                id: 'card-1',
                title: 'Card 1',
                description: 'This is the first card',
                status: 1,
                onUpdate: (updatedCard) => alert('Card updated clicked'),
            },
        ],
    },
};

export const ColumnWithMultipleCards: Story = {
    args: {
        title: 'Multiple Cards Column',
        cards: [
            {
                id: 'card-1',
                title: 'Card 1',
                description: 'This is the first card',
                status: 1,
                onUpdate: (updatedCard) => alert('Card updated clicked'),
            },
            {
                id: 'card-2',
                title: 'Card 2',
                description: 'This is the second card',
                status: 1,
                onUpdate: (updatedCard) => alert('Card updated clicked'),
            },
        ],
    },
};

export const EmptyColumn: Story = {
    args: {
        title: 'Empty Column',
        cards: [],
    },
};

export const ColumnWithVariousStatusCards: Story = {
    args: {
        title: 'Various Status Cards',
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
                title: 'In Progress Card',
                description: 'This card is in In Progress status',
                status: 2,
                onUpdate: (updatedCard) => alert('Card updated clicked'),
            },
        ]
    }
};

export const ColumnWithLongCardTitlesAndDescriptions: Story = {
    args: {
        title: 'Long Titles and Descriptions',
        cards: [
            {
                id: 'card-1',
                title: 'This is a very long title to test how the card component handles overflow in titles',
                description: 'This is a very long description to test how the card component handles overflow in descriptions. It should properly wrap text and maintain layout without breaking the design of the card component.',
                status: 2,
                onUpdate: (updatedCard) => alert('Card updated clicked'),
            },
            {
                id: 'card-2',
                title: 'This is a very long title to test how the card component handles overflow in titles',
                description: 'This is a very long description to test how the card component handles overflow in descriptions. It should properly wrap text and maintain layout without breaking the design of the card component.',
                status: 2,
                onUpdate: (updatedCard) => alert('Card updated clicked'),
            },
        ],
    },
};

export const ColumnWithCardEmptyTitlesAndDescriptions: Story = {
    args: {
        title: 'Cards with Empty Titles and Descriptions',
        cards: [
            {
                id: 'card-1',
                title: '',
                description: '',
                status: 1,
                onUpdate: (updatedCard) => alert('Card updated clicked'),
            },
        ],
    },
};

export const ColumnWithManyCards: Story = {
    args: {
        title: 'Many Cards Column',
        cards: Array.from({ length: 20 }, (_, index) => ({
            id: `card-${index + 1}`,
            title: `Card ${index + 1}`,
            description: `This is card number ${index + 1}`,
            status: (index % 4) + 1,
            onUpdate: (updatedCard) => alert('Card updated clicked'),
        })) as CardProperties[],
    },
};

export const ColumnWithEmptyColumnTitle: Story = {
    args: {
        title: '',
        cards: [
            {
                id: 'card-1',
                title: 'Card with Empty Column Title',
                description: 'This card is in a column with an empty title',
                status: 3,
                onUpdate: (updatedCard) => alert('Card updated clicked'),
            },
        ],
    },
};