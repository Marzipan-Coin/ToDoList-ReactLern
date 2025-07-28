import { toggleTaskCreating } from "../../store/configSlice";
import { useAppDispatch } from "../../store/hook";

const Header = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="flex items-center justify-between px-6 py-4 bg-slate-800 text-white rounded-t-lg shadow-md">
                <h1 className="text-2xl font-bold">My To-Do Board</h1>
                <button
                    onClick={() => dispatch(toggleTaskCreating())}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm">
                    ➕ Add Card
                </button>

            </div>
        </>
    );
}

export default Header;