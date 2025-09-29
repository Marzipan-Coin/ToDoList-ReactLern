import LimitedText from "../LimitedText/LimitedText";
import SpacedText from "../SpacedText/SpacedText";
import ToDoItemProps from "../ToDoItem/ToDoItemProps";

const Card = ({name, description, toDoItemStatus, completed, onDelete, onPromote}: ToDoItemProps) => {
        return (
        <div className="absolute top-20 left-10 z-0  block w-96 shadow-md rounded-lg p-4 bg-gray-800">
            <h2 className="text-xl font-semibold mb-2 text-yellow-100">
                <LimitedText limit={25} text={name} />
            </h2>
            <p className="text-yellow-200">
                <SpacedText interval={10} text={description} />
            </p>
            <p className="text-gray-500 mt-2">Status: {toDoItemStatus}</p>
            <p className="text-gray-500">Completed: {completed ? "Yes" : "No"}</p>
            <button className="mt-4 mr-40 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
                onClick={() => onDelete}>
                Delete
            </button>
            {/* Add the button for promote the toDoItemStatus */}
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
                onClick={() => onPromote}>
                Promote
            </button>
        </div>
    );
}

export default Card;