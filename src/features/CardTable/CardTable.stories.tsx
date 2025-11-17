import type { Meta, StoryObj } from '@storybook/react';
import CardTable from './CardTable';

const meta: Meta<typeof CardTable> = {
    title: 'features/CardTable',
    component: CardTable,
};

export default meta;
type Story = StoryObj<typeof CardTable>;

const defaultCallbacks = {
    onDelete: () => alert('Deleting'),
    onDemote: () => alert('Demoting'),
    onPromote: () => alert('Promoting'),
    onUpdate: () => alert('Updating'),
};

export const TableWithOneColumn: Story = {
    args: {
        children: [
            <CardTable.Column title="Single Column" key="col-1">
                <CardTable.Column.Card
                    id="card-1"
                    title="Card 1"
                    description="This is first card"
                    status={1}
                    {...defaultCallbacks}
                />
            </CardTable.Column>,
        ],
    },
};

export const TableWithMultipleColumns: Story = {
    args: {
        children: [
            <CardTable.Column title="Column 1" key="col-1">
                <CardTable.Column.Card
                    id="card-1"
                    title="Card 1"
                    description="This is the first card"
                    status={1}
                    {...defaultCallbacks}
                />
            </CardTable.Column>,
            <CardTable.Column title="Column 2" key="col-2">
                <CardTable.Column.Card
                    id="card-2"
                    title="Card 2"
                    description="This is the second card"
                    status={2}
                    {...defaultCallbacks}
                />
            </CardTable.Column>,
        ],
    },
};

export const EmptyTable: Story = {
    args: {
        children: [],
    },
};

export const TableWithFourColumns: Story = {
    args: {
        children: [
            <CardTable.Column title="Created" key="col-created">
                {Array.from({ length: 4 }, (_, i) => (
                    <CardTable.Column.Card
                        key={`created-${i + 1}`}
                        id={`card-created-${i + 1}`}
                        title={`Created Card ${i + 1}`}
                        description="This card is in Created status"
                        status={1}
                        {...defaultCallbacks}
                    />
                ))}
            </CardTable.Column>,

            <CardTable.Column title="In Progress" key="col-progress">
                {Array.from({ length: 4 }, (_, i) => (
                    <CardTable.Column.Card
                        key={`progress-${i + 1}`}
                        id={`card-progress-${i + 1}`}
                        title={`In Progress Card ${i + 1}`}
                        description="This card is in In Progress status"
                        status={2}
                        {...defaultCallbacks}
                    />
                ))}
            </CardTable.Column>,

            <CardTable.Column title="Testing" key="col-testing">
                {Array.from({ length: 4 }, (_, i) => (
                    <CardTable.Column.Card
                        key={`testing-${i + 1}`}
                        id={`card-testing-${i + 1}`}
                        title={`Testing Card ${i + 1}`}
                        description="This card is in Testing status"
                        status={3}
                        {...defaultCallbacks}
                    />
                ))}
            </CardTable.Column>,

            <CardTable.Column title="Completed" key="col-completed">
                {Array.from({ length: 2 }, (_, i) => (
                    <CardTable.Column.Card
                        key={`completed-${i + 1}`}
                        id={`card-completed-${i + 1}`}
                        title={`Completed Card ${i + 1}`}
                        description="This card is in Completed status"
                        status={4}
                        {...defaultCallbacks}
                    />
                ))}
            </CardTable.Column>,
        ],
    },
};

export const TableWithVariousStatusCards: Story = {
    args: {
        children: [
            <CardTable.Column title="Mixed" key="col-mixed">
                <CardTable.Column.Card
                    id="card-1"
                    title="Created Card"
                    description="This card is in Created status"
                    status={1}
                    {...defaultCallbacks}
                />
                <CardTable.Column.Card
                    id="card-2"
                    title="In Progress Card"
                    description="This card is in In Progress status"
                    status={2}
                    {...defaultCallbacks}
                />
                <CardTable.Column.Card
                    id="card-3"
                    title="Testing Card"
                    description="This card is in Testing status"
                    status={3}
                    {...defaultCallbacks}
                />
                <CardTable.Column.Card
                    id="card-4"
                    title="Completed Card"
                    description="This card is in Completed status"
                    status={4}
                    {...defaultCallbacks}
                />
            </CardTable.Column>,
        ],
    },
};

export const TableWithLongCardTitlesAndDescriptions: Story = {
    args: {
        children: [
            <CardTable.Column title="Long Content" key="col-long">
                <CardTable.Column.Card
                    id="card-1"
                    title="This is a very long title to test how the card component handles overflow in titles"
                    description="This is a very long description to test how the card component handles overflow in descriptions. It should properly wrap text and maintain layout without breaking the design of the card component."
                    status={2}
                    {...defaultCallbacks}
                />
                <CardTable.Column.Card
                    id="card-2"
                    title="This is another very long title to test overflow handling in titles"
                    description="Another very long description to test wrapping, overflow and layout robustness for the card component across varying content lengths."
                    status={2}
                    {...defaultCallbacks}
                />
            </CardTable.Column>,
        ],
    },
};

export const TableWithManyCards: Story = {
    args: {
        children: [
            <CardTable.Column title="Many Cards" key="col-many">
                {Array.from({ length: 20 }, (_, index) => (
                    <CardTable.Column.Card
                        key={`many-${index + 1}`}
                        id={`card-${index + 1}`}
                        title={`Card ${index + 1}`}
                        description={`This is card number ${index + 1}`}
                        status={((index % 4) + 1) as 1 | 2 | 3 | 4}
                        {...defaultCallbacks}
                    />
                ))}
            </CardTable.Column>,
        ],
    },
};

export const TableWithEmptyColumnTitle: Story = {
    args: {
        children: [
            <CardTable.Column title="" key="col-empty-title">
                <CardTable.Column.Card
                    id="card-1"
                    title="Card with Empty Column Title"
                    description="This card is in a column with an empty title"
                    status={3}
                    {...defaultCallbacks}
                />
            </CardTable.Column>,
        ],
    },
};