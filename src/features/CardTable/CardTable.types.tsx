import { CardBaseProperties } from "../../shared/types/CardTypes";
import { CardColumnProperties } from "../CardColumn/CardColumn.types";

export type CardTableProperties = {
    columns: CardColumnProperties[];
    onCardUpdate?: (updatedCard: CardBaseProperties) => void;
    onCardPromote?: (promotedCard: CardBaseProperties) => void;
    onCardDemote?: (demotedCard: CardBaseProperties) => void;
    onCardDelete?: (deletedCard: CardBaseProperties) => void;
};