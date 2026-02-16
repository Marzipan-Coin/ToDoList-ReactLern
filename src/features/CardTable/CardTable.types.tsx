import { CardBaseProperties, CardChangePayload } from "../../shared/types/CardTypes";
import { CardColumnProperties } from "../CardColumn/CardColumn.types";

export type CardTableProperties = {
    id: string;
    columns: CardColumnProperties[];
    onCardUpdate?: (id: string, changes: CardChangePayload) => void;
    onCardPromote?: (id: string) => void;
    onCardDemote?: (id: string) => void;
    onCardDelete?: (id: string) => void;
};