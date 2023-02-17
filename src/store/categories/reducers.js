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

/* import { createReducer } from "@reduxjs/toolkit";
import filterCategoriesActions from "./actions";

const { filterCategories } = filterCategoriesActions;

const initialState = {
  filterCategory: [],
};

const filterCategoriesReducer = createReducer(initialState, (builder) => {
  builder.addCase(filterCategories, (state, action) => {
    //console.log(action.payload)
    if (state.filterCategory.includes(action.payload)) {
      const newState = {
        filterCategory: state.filterCategory.filter(
          (id) => id !== action.payload
        ),
      };
      return newState;
    } else {
      state.filterCategory.push(action.payload);
    }
  });
});

export default filterCategoriesReducer;
 */