import Card from "../Card/Card";
import { CardColumnProperties } from "./CardColumn.types";
// TODO: Make it like in CardTable with children prop

const CardColumn = ({title, children} : {title: string, children: React.ReactNode}) => {

    return (
        <div className="flex flex-col gap-4 w-[350px] m-2 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
                {children}
        </div>

    );
};

CardColumn.Card = Card;

export default CardColumn;