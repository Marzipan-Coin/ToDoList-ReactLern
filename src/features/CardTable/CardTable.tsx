import Card from "../Card/Card";
import CardColumn from "../CardColumn/CardColumn";

const CardTable = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="flex gap-6 overflow-x-auto p-4 m-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            {children}
        </div>
    );
};

CardTable.Column = CardColumn;
CardTable.Card = Card;

export default CardTable;