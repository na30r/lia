import { combineReducers } from "@reduxjs/toolkit";
import shoppingCart from "./shoppingCart";

const reducer = combineReducers({
  shoppingCart,
});
export default reducer;
