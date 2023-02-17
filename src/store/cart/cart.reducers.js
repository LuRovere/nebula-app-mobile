import { createReducer } from '@reduxjs/toolkit';
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../actions/cart';

const initialState = {
  items: [],
  error: null,
};

export default createReducer(initialState, {
  [ADD_ITEM_TO_CART.fulfilled]: (state, action) => {
    state.items.push(action.payload);
},
[ADD_ITEM_TO_CART.rejected]: (state, action) => {
  state.error = action.error;
},
  [REMOVE_ITEM_FROM_CART.fulfilled]: (state, action) => {
    state.items = state.items.filter(item => item.id !== action.payload);
  },
  [REMOVE_ITEM_FROM_CART.rejected]: (state, action) => {
    state.error = action.error;
  },
});