import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChickenData } from "../../types/ChickenData";

type TDetailState = {
  selectedData: ChickenData[];
  detailActive: boolean;
};

const initialState: TDetailState = {
  selectedData: [],
  detailActive: false,
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
      state.detailActive = state.selectedData.length > 0; // 사이드바 활성화 여부 업데이트
    },
    setDetailActive: (state, action: PayloadAction<boolean>) => {
      state.detailActive = action.payload;
    },
  },
});

export const { setDetailData, setDetailActive } = detailSlice.actions;
export const detailReducer = detailSlice.reducer;
