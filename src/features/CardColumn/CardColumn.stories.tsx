import type { Meta, StoryObj } from '@storybook/react';
import CardColumn from './CardColumn';
import { CardProperties } from '../Card/Card.types';
import Card from '../Card/Card';

const meta: Meta<typeof CardColumn> = {
    title: 'features/CardColumn',
    component: CardColumn,
};

export default meta;
type Story = StoryObj<typeof CardColumn>;

const defaultCardProps = {
    onDelete: () => alert('Deleting'),
    onDemote: () => alert('Demoting'),
    onPromote: () => alert('Promoting'),
    onUpdate: () => alert('Updating'),
};

export const ColumnWithOneCard: Story = {
    args: {
        title: 'One Card Column',
        children: (
            <Card
                id="card-1"
                description="Description of card"
                status={1}
                title="Card title"
                {...defaultCardProps}
            />
        ),
    },
};

export const ColumnWithMultipleCards: Story = {
    args: {
        title: 'Multiple Cards Column',
        children: (
            <>
                <Card
                    id="card-1"
                    title="Card 1"
                    description="This is the first card"
                    status={1}
                    {...defaultCardProps}
                />
                <Card
                    id="card-2"
                    title="Card 2"
                    description="This is the second card"
                    status={1}
                    {...defaultCardProps}
                />
            </>
        ),
    },
};

export const EmptyColumn: Story = {
    args: {
        title: 'Empty Column',
        children: null,
    },
};

export const ColumnWithVariousStatusCards: Story = {
    args: {
        title: 'Various Status Cards',
        children: (
            <>
                <Card
                    id="card-1"
                    title="Created Card"
                    description="This card is in Created status"
                    status={1}
                    {...defaultCardProps}
                />
                <Card
                    id="card-2"
                    title="In Progress Card"
                    description="This card is in In Progress status"
                    status={2}
                    {...defaultCardProps}
                />
            </>
        ),
    },
};

export const ColumnWithLongCardTitlesAndDescriptions: Story = {
    args: {
        title: 'Long Titles and Descriptions',
        children: (
            <>
                <Card
                    id="card-1"
                    title="This is a very long title to test how the card component handles overflow in titles"
                    description="This is a very long description to test how the card component handles overflow in descriptions. It should properly wrap text and maintain layout without breaking the design of the card component."
                    status={2}
                    {...defaultCardProps}
                />
                <Card
                    id="card-2"
                    title="This is a very long title to test how the card component handles overflow in titles"
                    description="This is a very long description to test how the card component handles overflow in descriptions. It should properly wrap text and maintain layout without breaking the design of the card component."
                    status={2}
                    {...defaultCardProps}
                />
            </>
        ),
    },
};

export const ColumnWithCardEmptyTitlesAndDescriptions: Story = {
    args: {
        title: 'Cards with Empty Titles and Descriptions',
        children: (
            <Card
                id="card-1"
                title=""
                description=""
                status={1}
                {...defaultCardProps}
            />
        ),
    },
};

export const ColumnWithManyCards: Story = {
    args: {
        title: 'Many Cards Column',
        children: (
            <>
                {Array.from({ length: 20 }, (_, index) => (
                    <Card
                        key={`card-${index + 1}`}
                        id={`card-${index + 1}`}
                        title={`Card ${index + 1}`}
                        description={`This is card number ${index + 1}`}
                        status={((index % 4) + 1) as 1 | 2 | 3 | 4}
                        {...defaultCardProps}
                    />
                ))}
            </>
        ),
    },
};

export const ColumnWithEmptyColumnTitle: Story = {
    args: {
        title: '',
        children: (
            <Card
                id="card-1"
                title="Card with Empty Column Title"
                description="This card is in a column with an empty title"
                status={3}
                {...defaultCardProps}
            />
        ),
    },
};