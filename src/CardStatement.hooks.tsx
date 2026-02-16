import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../src/Redux/Store/Store";
import { add, update, promote, demote, deleteCard } from "../src/Redux/features/CardSlice";
import { CardChangePayload } from "../src/shared/types/CardTypes";


const useAppHandlers = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cardsState = useSelector((state: RootState) => state.cards);
  
  const handleUpdateCard = (changes: CardChangePayload) => {
    dispatch(update({...changes }));
  };
  const handlePromoteCard = (id: string) => {
    dispatch(promote(id));
  };

  const handleDemoteCard = (id: string) => {
    dispatch(demote(id));
  };

  const handleDeleteCard = (id: string) => {
    dispatch(deleteCard(id));
  };

  const handleAddCard = () => {
    dispatch(add());
  };

  const handleCards = () => cardsState.value;

  return { handleUpdateCard, handlePromoteCard, handleDemoteCard, handleDeleteCard, handleAddCard, handleCards };
};

export default useAppHandlers;