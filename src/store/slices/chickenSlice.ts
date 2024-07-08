import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChickenData } from "../../types/ChickenData";
import { ChickenState } from "../../types/ChickenState";

const initialState: ChickenState = {
  data: [],
  selected: [],
  currentPage: 1,
};

const chickenSlice = createSlice({
  name: "chicken",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<ChickenData[]>) {
      state.data = action.payload;
    },
    toggleSelect(state, action: PayloadAction<ChickenData>) {
      const isSelected = state.selected.find(
        (item) => item.id === action.payload.id
      );
      if (isSelected) {
        state.selected = state.selected.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.selected.push(action.payload);
      }
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setData, toggleSelect, setCurrentPage } = chickenSlice.actions;
export const chickenReducer = chickenSlice.reducer;
