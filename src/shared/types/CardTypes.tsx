import { ReactNode } from "react";

export type CardStatus = 1 /** Created */ | 2 /** In Progress */ | 3 /** Testing */ | 4 /** Completed */;


export type CardBaseProperties = {
    id: string;
    title: string;
    description: string;
    status: CardStatus;
};

export const CardStatusLabels: Record<CardStatus, string> = {
    1: "Created",
    2: "In Progress",
    3: "Testing",
    4: "Completed",
};