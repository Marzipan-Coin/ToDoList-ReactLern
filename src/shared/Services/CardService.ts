import { CardTableProperties } from "../../features/CardTable/CardTable.types";
import { MockData } from "../Mock/Data";
import { CardBaseProperties, CardChangePayload } from "../types/CardTypes";

type CardServiceType = {
    data: CardTableProperties;
    UpdateCard: (id: string, changes: CardChangePayload) => CardTableProperties;
    PromoteCard: (id: string) => CardTableProperties;
    DemoteCard: (id: string) => CardTableProperties;
    DeleteCard: (id: string) => CardTableProperties;
    AddCard: () => CardTableProperties;
}

const CardService = {
    data: { ...MockData },
    CreateCard(card: CardBaseProperties) {
        const column = this.data.columns[card.status - 1];
        column.cards.push(card);
    },
    UpdateCard(id: string, changes: CardChangePayload) {
        const columnIndex = this.data.columns.findIndex(col => col.cards.some(card => card.id === id));
        const column = this.data.columns[columnIndex];
        const cardIndex = column.cards.findIndex(card => card.id === id);

        if (cardIndex !== -1) {
            column.cards[cardIndex] = { ...column.cards[cardIndex], ...changes };
        }

        return { ...this.data };
    },
    PromoteCard(id: string) {
        const columnIndex = this.data.columns.findIndex(col => col.cards.some(card => card.id === id));
        const column = this.data.columns[columnIndex];
        const cardIndex = column.cards.findIndex(card => card.id === id);
        if (cardIndex === -1) return { ...this.data };
        const promotedCard = column.cards[cardIndex];
        const previousStatus = promotedCard.status;
        promotedCard.status += 1;

        if (cardIndex !== -1) {
            const newColumn = this.data.columns[promotedCard.status - 1];
            this.CreateCard(promotedCard);

            column.cards.splice(cardIndex, 1);
        }

        return { ...this.data };
    },
    DemoteCard(id: string) {
        const columnIndex = this.data.columns.findIndex(col => col.cards.some(card => card.id === id));
        const column = this.data.columns[columnIndex];
        const cardIndex = column.cards.findIndex(card => card.id === id);

        if (cardIndex === -1) return { ...this.data };
        const demotedCard = column.cards[cardIndex];
        const previousStatus = demotedCard.status;
        demotedCard.status -= 1;

        if (cardIndex !== -1) {
            const newColumn = this.data.columns[demotedCard.status - 1];
            this.CreateCard(demotedCard);

            column.cards.splice(cardIndex, 1);
        }

        return { ...this.data };
    },
    DeleteCard(id: string) {
        const columnIndex = this.data.columns.findIndex(col => col.cards.some(card => card.id === id));
        const column = this.data.columns[columnIndex];
        const cardIndex = column.cards.findIndex(card => card.id === id);

        if (cardIndex !== -1) {
            column.cards.splice(cardIndex, 1);
        }

        return { ...this.data };
    },
    AddCard() {
        const newCard: CardBaseProperties = {
            id: `card-${Date.now()}`,
            title: 'New Card',
            description: 'Description of the new card',
            status: 1,
        }

        this.data.columns[0].cards.push(newCard);

        return { ...this.data };
    }
};

export default CardService;
export type { CardServiceType };
