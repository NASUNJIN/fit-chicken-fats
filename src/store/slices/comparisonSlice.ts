import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChickenData } from "../../types/ChickenData";

type TComparisonState = {
    comparisonData: ChickenData[];
    comparisonActive: boolean;
};

const initialState: TComparisonState = {
    comparisonData: [],
    comparisonActive: false,
};

const comparisonSlice = createSlice({
    name: "comparison",
    initialState,
    reducers: {
        setComparisonData: (state, { payload }: PayloadAction<ChickenData>) => {
            const isComparison = state.comparisonData.find(
                (item) => item.id === payload.id
            );

            if (isComparison) {
                state.comparisonData = state.comparisonData.filter(
                    (item) => item.id !== payload.id
                );
            } else {
                state.comparisonData.push(payload);
            }
            state.comparisonActive = state.comparisonData.length > 0; // 사이드바 활성화 여부 업데이트
        },
        setComparisonActive: (state, action: PayloadAction<boolean>) => {
            state.comparisonActive = action.payload;
        },
    },
});

export const { setComparisonData, setComparisonActive } =
    comparisonSlice.actions;
export const comparisonReducer = comparisonSlice.reducer;
