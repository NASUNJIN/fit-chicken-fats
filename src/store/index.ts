import { configureStore } from "@reduxjs/toolkit";
import chickenReducer from "./slices/chickenSlice";

const store = configureStore({
    reducer: {
        chicken: chickenReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;