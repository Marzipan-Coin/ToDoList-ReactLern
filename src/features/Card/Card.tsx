import { useState } from "react";
import { useCardStyles } from "./Card.hooks";
import { CardProperties } from "./Card.types";

const Card = ({ id, title, description, status, onUpdate, onPromote, onDemote, onDelete }: CardProperties) => {
    const { cardStyles, statusLabel, cardHeaderStyle } = useCardStyles({ status });
    const [isCardUpdating, setIsCardUpdating] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedDescription, setEditedDescription] = useState(description);

    const handleSave = () => {
        if (onUpdate) {
            onUpdate({ id, title: editedTitle, description: editedDescription, status });
        }
        setIsCardUpdating(false);
    };

    return (
        <div className={`${cardStyles.Card} relative`} id={id}>
            <div className={cardStyles.Content}>
                <div className="flex justify-end mb-2">
                    {!isCardUpdating ? (
                        <button
                            onClick={() => setIsCardUpdating(true)}
                            className="text-sm text-gray-400 hover:text-blue-600"
                        >
                            ✏️
                        </button>
                    ) : (
                        <button
                            onClick={handleSave}
                            className="text-sm text-green-600 hover:text-green-700"
                        >
                            ✅
                        </button>
                    )}
                </div>

                {!isCardUpdating ? (
                    <>
                        <h2 className={cardHeaderStyle}>{title}</h2>
                        <p className={cardStyles.Content}>{description}</p>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            className={`${cardHeaderStyle} w-full mb-2 border rounded px-2 py-1`}
                        />
                        <textarea
                            value={editedDescription}
                            onChange={(e) => setEditedDescription(e.target.value)}
                            className="w-full border rounded px-2 py-1 resize-none"
                            rows={3}
                        />
                    </>
                )}

                {status > 1 && (<button
                    onClick={() => onDemote && onDemote({ id, title, description, status })}
                    className="text-sm text-green-600 hover:text-green-700"
                >
                    ◀
                </button>)
                }

                <span className={`card-status status-${status}`}>Status: {statusLabel}</span>

                {status < 4 && (<button
                    onClick={() => onPromote && onPromote({ id, title, description, status })}
                    className="text-sm text-green-600 hover:text-green-700"
                >
                    ▶
                </button>)
                }

                <p></p>

                <button
                    onClick={() => onDelete && onDelete({ id, title, description, status })}
                    className="text-sm text-green-600 hover:text-green-700"
                >
                    ❌
                </button>




            </div>
        </div>
    );
};

export default Card;