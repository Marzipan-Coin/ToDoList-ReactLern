import { useAppDispatch } from "../../store/hook";
import { promoteToDo, removeToDo } from "../../store/todoSlice";
import ToDoItemProps from "../ToDoItem/ToDoItemProps";

const Card = (props: ToDoItemProps) => {
    const dispatch = useAppDispatch();

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{props.name}</h2>
            <p className="text-gray-700">{props.description}</p>
            <p className="text-gray-500 mt-2">Status: {props.toDoItemStatus}</p>
            <p className="text-gray-500">Completed: {props.completed ? "Yes" : "No"}</p>
            <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
                onClick={() => dispatch(removeToDo({ id: props.id }))}>
                Delete
            </button>
            {/* Add the button for promote the toDoItemStatus */}
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
                onClick={() => dispatch(promoteToDo({ todo: props, oldStatus: props.toDoItemStatus }))}>
                Promote
            </button>
        </div>
    );
}

export default Card;