import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import productSlice from "./reducers/getProducts.reducer";

const store = configureStore({
    reducer: {
        user: productSlice.reducer
    },
    devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
