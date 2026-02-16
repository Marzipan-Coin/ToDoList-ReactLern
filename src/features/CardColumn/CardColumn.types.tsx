import { CardBaseProperties } from "../../shared/types/CardTypes";
import { CardChangePayload, CardProperties } from "../Card/Card.types";

export type CardColumnProperties = {
    title: string;
    cards: CardBaseProperties[];
    onCardUpdate?: (id: string, payload: CardChangePayload) => void;
    onCardPromote?: (id: string) => void;
    onCardDemote?: (id: string) => void;
    onCardDelete?: (id: string) => void;
};