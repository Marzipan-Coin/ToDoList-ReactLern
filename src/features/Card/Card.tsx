import { ReactNode, useState } from "react";
import { useCardStyles } from "./Card.hooks";
import { CardProperties, CardViewProperties } from "./Card.types";

const View = ({title, description, status} : CardViewProperties) => {
    const { cardStyles, cardHeaderStyle } = useCardStyles({ status });

    return <>
        <>
            <h2 className={cardHeaderStyle}>{title}</h2>
            <p className={cardStyles.Content}>{description}</p>
        </>
    </>
}

const CardForm = ({ editedTitle, editedDescription, setEditedTitle, setEditedDescription, cardHeaderStyle }: { editedTitle: string, editedDescription: string, setEditedTitle: (value: string) => void, setEditedDescription: (value: string) => void, cardHeaderStyle: string }) => {
    return (<>
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
    </>);
}

const Button = ({onClick, className, content, isEnabled} : { onClick : React.MouseEventHandler<HTMLButtonElement> | undefined, className: string, content : string, isEnabled : boolean}) => {
    if (isEnabled) return (
    <button
        onClick={onClick}
        className={className}
    >
        {content}
    </button>);
    else return (<></>);
}

const Card = ({ id, title, description, status, onUpdate, onPromote, onDemote, onDelete }: CardProperties) => {
    const { cardStyles, statusLabel, cardHeaderStyle } = useCardStyles({ status });
    const [isCardUpdating, setIsCardUpdating] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedDescription, setEditedDescription] = useState(description);

    const editContent = isCardUpdating ? "✅" : "✏️";
    const editClassname = isCardUpdating ? "text-sm text-green-600 hover:text-green-700" : "text-sm text-gray-400 hover:text-blue-600";
    
    const onEdit = () => {
        setIsCardUpdating(!isCardUpdating);
        if (!isCardUpdating) return; 

        onUpdate(id, { title: editedTitle, description: editedDescription });
    };

    const CardContent = () => isCardUpdating ?
                    <CardForm editedDescription={editedDescription} editedTitle={editedTitle} cardHeaderStyle={cardHeaderStyle} setEditedDescription={setEditedDescription} setEditedTitle={setEditedTitle} /> :
                    <View description={description} title={title} status={status} />;

    return (
        <div className={`${cardStyles.Card} relative`} id={id}>
            <div className={cardStyles.Content}>
                <div className="flex justify-end mb-2">
                        <Button 
                         onClick={onEdit}
                         className={editClassname}
                         content={editContent}
                         isEnabled={true}/>
                </div>

                {CardContent()}

                <Button 
                    onClick={() => onDemote(id)}
                    className="text-sm text-green-600 hover:text-green-700"
                    content="◀"
                    isEnabled={status > 1}
                />

                <span className={`card-status status-${status}`}>Status: {statusLabel}</span>

                <Button
                    onClick={() => onPromote(id)}
                    className="text-sm text-green-600 hover:text-green-700"
                    content="▶"
                    isEnabled = {status < 4}
                    />

                <br />
                
                <Button 
                    onClick={() => onDelete(id)}
                    className="text-sm text-green-600 hover:text-green-700"
                    content="❌"
                    isEnabled={true}
                />
            </div>
        </div >
    );
};

export default Card;