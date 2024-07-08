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
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setData, setCurrentPage } = chickenSlice.actions;
export const chickenReducer = chickenSlice.reducer;
