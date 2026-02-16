import { CardColumnProperties } from "../../features/CardColumn/CardColumn.types";
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
        const newColumns = this.data.columns.map((col, idx) =>
            idx === card.status - 1
                ? { ...col, cards: [...col.cards, card] }
                : col
        );
        return { ...this.data, columns: newColumns };

    },
    UpdateCard(id: string, changes: CardChangePayload) {
        const newColumns = this.data.columns.map(col => ({
            ...col,
            cards: col.cards.map(card =>
                card.id === id ? { ...card, ...changes } : card
            ),
        }));
        return { ...this.data, columns: newColumns };

    },
    PromoteCard(id: string) {
        const columnIndex = this.data.columns.findIndex(col => col.cards.some(card => card.id === id));
        if (columnIndex === -1) return { ...this.data };

        const column = this.data.columns[columnIndex];
        if (!column) return { ...this.data };

        const cardIndex = column.cards.findIndex(card => card.id === id);
        if (cardIndex === -1) return { ...this.data };

        const promotedCard: CardBaseProperties = { ...column.cards[cardIndex] };
        promotedCard.status += 1;

        const newColumns = this.data.columns.map((col, idx) => {
            if (idx === columnIndex) {
                return { ...col, cards: col.cards.filter((_, i) => i !== cardIndex) };
            }
            if (idx === promotedCard.status - 1) {
                return { ...col, cards: [...col.cards, promotedCard] };
            }
            return col;
        });


        return { ...this.data, columns: newColumns };
    },
    DemoteCard(id: string) {
        const columnIndex = this.data.columns.findIndex(col => col.cards.some(card => card.id === id));
        if (columnIndex === -1) return { ...this.data };

        const column = this.data.columns[columnIndex];
        if (!column) return { ...this.data };

        const cardIndex = column.cards.findIndex(card => card.id === id);
        if (cardIndex === -1) return { ...this.data };

        const demotedCard = { ...column.cards[cardIndex] };
        demotedCard.status -= 1;

        const newColumns = this.data.columns.map((col, idx) => {
            if (idx === columnIndex) {
                return { ...col, cards: col.cards.filter((_, i) => i !== cardIndex) };
            }
            if (idx === demotedCard.status - 1) {
                return { ...col, cards: [...col.cards, demotedCard] };
            }
            return col;
        });

        return { ...this.data, columns: newColumns };
    },
    DeleteCard(id: string) {
        const columnIndex = this.data.columns.findIndex(col => col.cards.some(card => card.id === id));
        if (columnIndex === -1) return { ...this.data };

        const column = this.data.columns[columnIndex];
        if (!column) return { ...this.data };

        const cardIndex = column.cards.findIndex(card => card.id === id);
        if (cardIndex === -1) return { ...this.data };

        const newColumns = this.data.columns.map((col, idx) => {
            if (idx !== columnIndex) return col;
            return {
                ...col,
                cards: col.cards.filter(card => card.id !== id),
            };
        });

        return { ...this.data, columns: newColumns };
    },
    AddCard() {
        const newCard: CardBaseProperties = {
            id: `card-${Date.now()}`,
            title: 'New Card',
            description: 'Description of the new card',
            status: 1,
        };

        const newColumns = this.data.columns.map((col, idx) =>
            idx === 0 ? { ...col, cards: [...col.cards, newCard] } : col
        );

        return { ...this.data, columns: newColumns };
    }
};

export default CardService;
export type { CardServiceType };
