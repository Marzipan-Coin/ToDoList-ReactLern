import ToDoItemProps from "./ToDoItemProps";
import ToDoItemStatus from "./ToDoItemStatus";
import HoveredColor from "./HoveredColor";


const useHoveredColor = (toDoItemProps: ToDoItemProps) : HoveredColor => {
    const hoverColors = {
        [ToDoItemStatus.Created]: "hover:bg-yellow-400",
        [ToDoItemStatus.InWork]: "hover:bg-emerald-500",
        [ToDoItemStatus.InReview]: "hover:bg-orange-600",
        [ToDoItemStatus.Testing]: "hover:bg-rose-900",
        [ToDoItemStatus.Done]: "hover:bg-lime-500"
    };

    return hoverColors[toDoItemProps.toDoItemStatus] as HoveredColor;
};

export default useHoveredColor;