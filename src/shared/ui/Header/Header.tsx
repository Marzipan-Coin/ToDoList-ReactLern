import { HeaderProperties } from "./Header.types";

const Header = ({ title, logoUrl, onCreateCard }: HeaderProperties) => {
    return (
        <>
            <header
                className='w-full flex items-center justify-between px-6 py-4 border-b bg-gray-100 dark:bg-gray-900'>
                <div className="flex items-center gap-3">
                    {logoUrl && <img src={logoUrl} alt="Logo" className="h-8 w-8" />}
                    {title && <h1 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h1>}
                </div>

                <div className="flex items-center gap-4">
                    {onCreateCard && (
                        <button
                            onClick={onCreateCard}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            + New Card
                        </button>
                    )}
                </div>
            </header>

        </>
    );
};

export default Header;