import { useAppDispatch } from "../../store/hook";
import { promoteToDo, removeToDo } from "../../store/todoSlice";
import ToDoItemProps from "../ToDoItem/ToDoItemProps";

const Card = (props: ToDoItemProps) => {
    const dispatch = useAppDispatch();

    return (
        <div className="absolute top-20 left-10 z-0  block w-96 shadow-md rounded-lg p-4 bg-gray-800">
            <h2 className="text-xl font-semibold mb-2 text-yellow-100">{props.name}</h2>
            <p className="text-yellow-200">{props.description}</p>
            <p className="text-gray-500 mt-2">Status: {props.toDoItemStatus}</p>
            <p className="text-gray-500">Completed: {props.completed ? "Yes" : "No"}</p>
            <button className="mt-4 mr-40 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
                onClick={() => dispatch(removeToDo({ id: props.id }))}>
                Delete
            </button>
            {/* Add the button for promote the toDoItemStatus */}
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
                onClick={() => dispatch(promoteToDo({ todo: props, oldStatus: props.toDoItemStatus }))}>
                Promote
            </button>
        </div>
    );
}

export default Card;