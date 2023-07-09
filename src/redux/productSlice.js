import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
    removeProduct(state, action){
       return []
    }
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;