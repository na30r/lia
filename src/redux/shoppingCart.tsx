import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../models/Product";

export interface shoppingListItem {
  product: Product;
  quantity: number;
}
const initialState: shoppingListItem[] = [];

const productsSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    increaseQuantity: (state, action: PayloadAction<Product>) => {
      const existingItemIndex = state.findIndex((item) => item.product.id === action.payload.id);
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
      } else {
        state.push({ product: action.payload, quantity: 1 });
      }
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const itemIndex = state.findIndex((item) => item.product.id === action.payload);
      if (itemIndex !== -1) {
        if (state[itemIndex].quantity > 0) {
          state[itemIndex].quantity -= 1;
        }
        if (state[itemIndex].quantity === 0) {
          state.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { increaseQuantity, decreaseQuantity } = productsSlice.actions;
export default productsSlice.reducer;
