import { toggleCardOpened } from "../../store/configSlice";
import { useAppDispatch } from "../../store/hook";
import { removeToDo, addTodo } from "../../store/todoSlice";
import LimitedText from "../LimitedText/LimitedText";
import SpacedText from "../SpacedText/SpacedText";
import ToDoItemProps from "../ToDoItem/ToDoItemProps";

const Card = (props: ToDoItemProps) => {
    const dispatch = useAppDispatch();

    const promoteToDo = () => {
        let updatedToDo = {
            ...props,
            toDoItemStatus: props.toDoItemStatus + 1 // Increment the status
        };
        dispatch(removeToDo({ id: props.id })); // Remove the current item
        dispatch(addTodo({ ToDoItem: updatedToDo })); // Add the updated item
        dispatch(toggleCardOpened()); // Close the card after promoting
    }

    const deleteToDo = () => {
        dispatch(removeToDo({ id: props.id }));
        dispatch(toggleCardOpened()); // Close the card after deletion
    }

    return (
        <div className="absolute top-20 left-10 z-0  block w-96 shadow-md rounded-lg p-4 bg-gray-800">
            <h2 className="text-xl font-semibold mb-2 text-yellow-100">
                <LimitedText limit={25} text={props.name} />
            </h2>
            <p className="text-yellow-200">
                <SpacedText interval={10} text={props.description} />
            </p>
            <p className="text-gray-500 mt-2">Status: {props.toDoItemStatus}</p>
            <p className="text-gray-500">Completed: {props.completed ? "Yes" : "No"}</p>
            <button className="mt-4 mr-40 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
                onClick={() => deleteToDo()}>
                Delete
            </button>
            {/* Add the button for promote the toDoItemStatus */}
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
                onClick={() => promoteToDo()}>
                Promote
            </button>
        </div>
    );
}

export default Card;