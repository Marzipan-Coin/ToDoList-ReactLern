import { CardStatus } from "../../shared/types/CardTypes";
import { CardBaseProperties } from "../../shared/types/CardTypes";

export type CardStyleKeys =
    | "Card"
    | "Header"
    | "Content"
    | "Footer";

export type CardProperties = CardBaseProperties & { 
    onUpdate?: (updatedCard: CardBaseProperties) => void;  
    onPromote?: (promotedCard: CardBaseProperties) => void;
    onDemote?: (demotedCard: CardBaseProperties) => void;
    onDelete?: (deletedCard: CardBaseProperties) => void;
};

export const CardStatusLabels: Record<CardStatus, string> = {
    1: "Created",
    2: "In Progress",
    3: "Testing",
    4: "Completed",
};

export const CardStyles: Record<CardStyleKeys, string> = {
    "Card": "w-[320px] rounded-lg shadow overflow-hidden flex flex-col",
    "Header": "bg-gray-100 px-4 py-2 font-semibold text-gray-800",
    "Content": "p-4 text-gray-700 flex-1",
    "Footer": "bg-gray-50 px-4 py-2 text-sm text-gray-600",
};

export const CardColorsStylesByStatus: Record<CardStatus, string> = {
    1: "border-l-4 border-red-500 bg-red-50 hover:bg-red-100",
    2: "border-l-4 border-yellow-500 bg-yellow-50 hover:bg-yellow-100",
    3: "border-l-4 border-blue-500 bg-blue-50 hover:bg-blue-100",
    4: "border-l-4 border-green-500 bg-green-50 hover:bg-green-100",
};

export const CardHeaderStyles: Record<CardStatus, string> = {
    1: "bg-red-200",
    2: "bg-yellow-200",
    3: "bg-blue-200",
    4: "bg-green-200",
};