import { SetStateAction, useEffect, useState } from "react";
import CardService from "./shared/Services/CardService";
import { CardChangePayload } from "./shared/types/CardTypes";
import { CardColumnProperties } from "./features/CardColumn/CardColumn.types";

const useAppHandlers = () => {
  const cardService = CardService;

  const [cards, setColumns] = useState<CardColumnProperties[]>([]);
  
  const handleUpdateCard = (id: string, changes: CardChangePayload) => {
    const updatedData = cardService.UpdateCard(id, changes);

    handleGetCards();
  };
  const handlePromoteCard = (id: string) => {
    const promotedData = cardService.PromoteCard(id);

    handleGetCards();
  };

  const handleDemoteCard = (id: string) => {
    const demotedData = cardService.DemoteCard(id);

    handleGetCards();
  };

  const handleDeleteCard = (id: string) => {
    const deletedData = cardService.DeleteCard(id);

    handleGetCards();
  };

  const handleAddCard = () => {
    const addedData = cardService.AddCard();
    
    handleGetCards();
  };

  const handleGetCards = () : void => {
    setColumns([...cardService.data.columns]);
  };

  const handleCards = () => {
    return cards;
  }

  useEffect(() => handleGetCards(), []);


  return { handleUpdateCard, handlePromoteCard, handleDemoteCard, handleDeleteCard, handleAddCard, handleGetCards, handleCards };
};

export default useAppHandlers;