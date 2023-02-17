
import { createReducer } from "@reduxjs/toolkit";
import categoryActions from "./actions";

const { getCategories } = categoryActions;
const initialState = { categories: [] };

const categoryReducers = createReducer(initialState, (builder) => {
  builder.addCase(getCategories.fulfilled, (state, action) => {
    let newState = {
      categories: action.payload.response.cateogories,
    };
    return newState;
  });
});


export default categoryReducers;

