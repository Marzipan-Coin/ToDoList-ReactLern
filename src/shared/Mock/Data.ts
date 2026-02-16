import { CardTableProperties } from "../../features/CardTable/CardTable.types";
import { CardStatusLabels } from "../types/CardTypes";

export const MockData: CardTableProperties = {
    columns: [
        {
            title: CardStatusLabels[1],
            cards: [
                {
                    id: 'card-1',
                    title: 'Set up project',
                    description: 'Initialize the project repository and install dependencies.',
                    status: 1,
                },
                {
                    id: 'card-2',
                    title: 'Test project configuration',
                    description: 'Ensure that the project is configured correctly and runs without errors.',
                    status: 1,
                },
                {
                    id: 'card-3',
                    title: 'Setup development environment',
                    description: 'Configure IDE and tools for efficient development.',
                    status: 1,
                },
            ]
        },
        {
            title: CardStatusLabels[2],
            cards: [
                {
                    id: 'card-4',
                    title: 'Implement base components',
                    description: 'Create reusable UI components for the application.',
                    status: 2,
                },
                {
                    id: 'card-5',
                    title: 'Prepare storybook stories',
                    description: 'Write stories for components to showcase their usage in Storybook.',
                    status: 2,
                },
                {
                    id: 'card-6',
                    title: 'Develop CardTable feature',
                    description: 'Build the CardTable component to display cards in columns based on their status.',
                    status: 2,
                },
            ]
        },
        {
            title: CardStatusLabels[3],
            cards: [
                {
                    id: 'card-7',
                    title: 'Add redux state management',
                    description: 'Integrate Redux for managing application state effectively.',
                    status: 3,
                },
                {
                    id: 'card-8',
                    title: 'Write unit tests',
                    description: 'Create unit tests for components and features to ensure reliability.',
                    status: 3,
                },
            ]
        },
        {
            title: CardStatusLabels[4],
            cards: [
                {
                    id: 'card-9',
                    title: 'Prepare backend server',
                    description: 'Set up the backend server to handle API requests and data storage.',
                    status: 4,
                },
                {
                    id: 'card-10',
                    title: 'End to end testing',
                    description: 'Conduct end to end tests to ensure the entire application works as expected.',
                    status: 4,
                }
            ]
        }
    ]
};