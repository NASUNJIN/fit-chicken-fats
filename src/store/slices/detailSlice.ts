import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChickenData } from "../../types/ChickenData";

// 타입
type TDetailState = {
  selectedData: ChickenData[];
};

// 초기 상태
const initialState: TDetailState = {
  selectedData: [],
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    setDetailData: (state, { payload }: PayloadAction<ChickenData>) => {
      const isChecked = state.selectedData.find(
        (item) => item.id === payload.id
      );

      if (isChecked) {
        state.selectedData = state.selectedData.filter(
          (item) => item.id !== payload.id
        );
      } else {
        state.selectedData.push(payload);
      }
    },
  },
});

export const { setDetailData } = detailSlice.actions;
export const detailReducer = detailSlice.reducer;
