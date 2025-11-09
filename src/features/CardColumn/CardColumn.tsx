import Card from "../Card/Card";
import { CardColumnProperties } from "./CardColumn.types";

const CardColumn = ({ title, cards, onCardUpdate, onCardPromote, onCardDemote, onCardDelete }: CardColumnProperties) => {

    return (
        <div className="flex flex-col gap-4 w-[350px] m-2 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
            {cards.map((card) => (
                <Card key={card.id} {...card} onUpdate={onCardUpdate} onPromote={onCardPromote} onDemote={onCardDemote} onDelete={onCardDelete} />
            ))}
        </div>

    );
};

export default CardColumn;