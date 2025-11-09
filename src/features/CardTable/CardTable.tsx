import CardColumn from "../CardColumn/CardColumn";
import { CardTableProperties } from "./CardTable.types";

const CardTable = ({ columns, onCardUpdate, onCardPromote, onCardDemote, onCardDelete } : CardTableProperties) => {
    return (
        <div className="flex gap-6 overflow-x-auto p-4 m-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            {columns.map((column, colIndex) => (
                <CardColumn key={colIndex} {...column} onCardUpdate={onCardUpdate} onCardPromote={onCardPromote} onCardDemote={onCardDemote} onCardDelete={onCardDelete} />
            ))}
        </div>
    );
};

export default CardTable;