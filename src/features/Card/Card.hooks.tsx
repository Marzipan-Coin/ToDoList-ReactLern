import { CardStatus } from "../../shared/types/CardTypes";
import { CardStyles, CardStyleKeys, CardColorsStylesByStatus, CardStatusLabels, CardHeaderStyles } from "./Card.types";

export const useCardStyles = ({ status } : {status: CardStatus}) => {
    const color = CardColorsStylesByStatus[status];

    const cardStyles = { ...CardStyles, Card: `${CardStyles.Card} ${color}` };
    const cardHeaderStyle = CardStyles.Header + " " + CardHeaderStyles[status];
    const statusLabel = CardStatusLabels[status];

    return { cardStyles, cardHeaderStyle, statusLabel };
};
