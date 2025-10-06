import React from "react";

const TextInput = ({ placeholder, onChange, inputTitle}: 
    { placeholder: string; onChange: (value: string) => void; inputTitle: string }) => {
    return (
        <div>
            <label className="w-40 inline-block text-sm font-medium text-gray-700">
                {inputTitle}
            </label>
            <input
                type="text"
                className="w-40 inline-block p-2 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default TextInput;