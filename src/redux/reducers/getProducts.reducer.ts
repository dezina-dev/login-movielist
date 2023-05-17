import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import getProductsAction from "../actions/getProducts.action";

 const getProductSlice = createSlice({
  name: "users",
  initialState: {
    user: {}
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsAction.fulfilled, (state, {payload}) => {
      console.log("payload", payload)
      state.user=payload
    });
  },
});

export default getProductSlice;