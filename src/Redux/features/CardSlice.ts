import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardTableProperties } from "../../features/CardTable/CardTable.types";
import CardService from '../../shared/Services/CardService';
import { CardChangePayload } from '../../shared/types/CardTypes';

interface CardsState {
  value: CardTableProperties;
}

const initialState: CardsState = { 
  value: CardService.data ?? { id: 'table-1', columns: [] },
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    add: (state) => { 
      const newData = CardService.AddCard(); 
      state.value = newData; 
      CardService.data = newData;
    },
    update: (state, action: PayloadAction<CardChangePayload>) => { 
      const newData = CardService.UpdateCard(action.payload.id, action.payload); 
      state.value = newData; 
      CardService.data = newData;
    },
    promote: (state, action: PayloadAction<string>) => {
      const newData = CardService.PromoteCard(action.payload);
      state.value = newData;
      CardService.data = newData;
    },
    demote: (state, action: PayloadAction<string>) => {
      const newData = CardService.DemoteCard(action.payload);
      state.value = newData;
      CardService.data = newData;
    },
    delete: (state, action: PayloadAction<string>) => {
      const newData = CardService.DeleteCard(action.payload);
      state.value = newData;
      CardService.data = newData;
    },
  },
});

export const { add, update, promote, demote, delete: deleteCard } = cardsSlice.actions;
export default cardsSlice.reducer;
