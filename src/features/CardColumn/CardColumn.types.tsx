import { CardBaseProperties } from "../../shared/types/CardTypes";
import { CardProperties } from "../Card/Card.types";

export type CardColumnProperties = {
    title: string;
    cards: CardProperties[];
    onCardUpdate?: (updatedCard: CardBaseProperties) => void;
    onCardPromote?: (promotedCard: CardBaseProperties) => void;
    onCardDemote?: (demotedCard: CardBaseProperties) => void;
    onCardDelete?: (deletedCard: CardBaseProperties) => void;
};