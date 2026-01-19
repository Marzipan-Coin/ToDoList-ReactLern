import { CardTableProperties } from "./features/CardTable/CardTable.types";
import { CardServiceType } from "./shared/Services/CardService";
import { CardChangePayload } from "./shared/types/CardTypes";

const useAppHandlers = ({setColumns, cardService} : {setColumns: React.Dispatch<React.SetStateAction<CardTableProperties>>, cardService: CardServiceType}) => {
    const handleUpdateCard = (id: string, changes: CardChangePayload) => {
    const updatedData = cardService.UpdateCard(id, changes);
    setColumns(updatedData);
  };

  const handlePromoteCard = (id: string) => {
    const promotedData = cardService.PromoteCard(id);

    setColumns(promotedData);
  };

  const handleDemoteCard = (id: string) => {
    const demotedData = cardService.DemoteCard(id);

    setColumns(demotedData);
  };

  const handleDeleteCard = (id: string) => {
    const deletedData = cardService.DeleteCard(id);

    setColumns(deletedData);
  };

  const handleAddCard = () => {
    const addedData = cardService.AddCard();
    
    setColumns(addedData);
  };

  return { handleUpdateCard, handlePromoteCard, handleDemoteCard, handleDeleteCard, handleAddCard };
};

export default useAppHandlers;