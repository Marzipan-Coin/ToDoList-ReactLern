import ToDoItemStatus from "../ToDoItem/ToDoItemStatus";

const CreateCardForm = () => {
    let title = "";
    let id = "";
    let description = "";

    return (
        <>
            <div className="block max-w-96 w-96 items-center space-x-4 border-2 border-black rounded p-4 bg-gray-100">
                <h3 className="block w-40 text-xl font-semibold text-gray-800">Create Card</h3>
                <div className="w-100 inline-grid grid-cols-2 gap-4 mt-4">
                    <label className="w-40 inline-block text-sm font-medium text-gray-700">Card Title</label>
                    <input
                        type="text"
                        className="w-40 inline-block p-2 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter card title"  
                        onChange={(e) => title = e.target.value}
                    ></input>
                    <label className="w-40 inline-block text-sm font-medium text-gray-700">Card Id</label>
                    <input
                        type="text"
                        className="w-40 inline-block p-2 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter card id"
                        onChange={(e) => id = e.target.value}
                    ></input>
                    <label className="w-40 inline-block text-sm font-medium text-gray-700">Card Description</label>
                    <input
                        type="text"
                        className="w-40 inline-block p-2 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter description"
                        onChange={(e) => description = e.target.value}
                    ></input>
                    <input
                        type="submit"
                        className="w-40 inline-block p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
                        value="Create Card"
                        onClick={() => {
                            
                        }}
                    />
                    <input
                        type="button"
                        className="w-40 inline-block p-2 bg-red-900 text-white rounded-md hover:bg-red-600 cursor-pointer"
                        value="Cancel"
                        onClick={() => {
                            
                        }}
                    />
                </div>

                
            </div>
        </>
    );
};

export default CreateCardForm;