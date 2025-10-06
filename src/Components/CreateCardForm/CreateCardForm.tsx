import { useRef } from "react";
import TextInput from "../TextInput/TextInput";
import ModalWindow from "../ModalWindow/ModalWindow";

const CreateCardForm = ({isOpen, onClose} : {isOpen : boolean, onClose: () => void}) => {
    const title = useRef("");
    const id = useRef("");
    const description = useRef("");

    return (
        <>
            <ModalWindow onClose={onClose} isOpen={isOpen}>
                <div className="block max-w-96 w-96 items-center space-x-4 border-2 border-black rounded p-4 bg-gray-100">
                    <h3 className="block w-40 text-xl font-semibold text-gray-800">Create Card</h3>
                    <div className="w-100 inline-grid grid-cols-2 gap-4 mt-4">
                        <TextInput inputTitle="Card Title" placeholder="Enter card title" onChange={(value) => title.current = value} />
                        <TextInput inputTitle="Card Id" placeholder="Enter card id" onChange={(value) => id.current = value} />
                        <TextInput inputTitle="Card Description" placeholder="Enter description" onChange={(value) => description.current = value} />
                        <input
                            type="submit"
                            className="w-40 inline-block p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
                            value="Create Card"
                            onClick={() => {
                                
                            }}
                        />
                    </div>
                </div>
            </ModalWindow>
        </>
    );
};

export default CreateCardForm;